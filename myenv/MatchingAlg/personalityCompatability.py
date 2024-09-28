import pandas as pd
import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from textblob import TextBlob
from transformers import BertTokenizer, BertModel
import torch
from sklearn.metrics.pairwise import cosine_similarity

# Load pre-trained BERT model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Move model to GPU if available
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)

verbs = {
    "am", "have", "do", "will", "can", "would", "was", "could", "think", 
    "know", "feel", "see", "want", "need", "like", "go", "get", "make", 
    "take", "give", "love", "believe", "say", "try", "find", "hope", 
    "understand", "remember", "use", "work", "love", "enjoy", "appreciate", 
    "adore", "cherish", "value", "admire", "treasure", "favor", "respect", "hate"
}
stop_words = set(stopwords.words('english')).union(verbs)

def get_embedding(text):
    # Tokenize and encode the text
    inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True)
    inputs = {key: val.to(device) for key, val in inputs.items()}  # Move to GPU

    # Get the outputs from BERT
    with torch.no_grad():  # Disable gradient calculation
        outputs = model(**inputs)
    
    # Get the embedding for the [CLS] token (the first token)
    cls_embedding = outputs.last_hidden_state[0][0].numpy()
    return cls_embedding


def preprocessing(paragraph):
    words = paragraph.lower().split()
    return ' '.join([word for word in words if word not in stop_words])


# Scale Adjusted for the 
def cos_similarity(vectorA, vectorB):
    similarity = cosine_similarity([vectorA], [vectorB])
    return (similarity[0][0] * 250 - 170)


def main():
    data = {
        'Person1': [" and am looking forward to getting to know everyone. i enjoy all things sports related, music, art, and cooking! feel free to chat with me as i am quite easy going"],
        'Person2': ["I love playing sports, trying new food, and going to concerts(super hype for chief keef and don toliver) Excited to meet you all soon but feel free to hmu before!!"]
    }
    df = pd.DataFrame(data, index=[0])


    df['Person1'] = df['Person1'].apply(preprocessing)
    df['Person2'] = df['Person2'].apply(preprocessing)

    print(df)
    embeddingA = get_embedding(df['Person1'][0])
    embeddingB = get_embedding(df['Person2'][0])

    return cos_similarity(embeddingA, embeddingB)
