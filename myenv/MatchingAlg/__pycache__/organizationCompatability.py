orgsA = "aphi, axo, aep"
orgsB = "aphi, axo, zta"
temporgsA = orgsA.split(',');
temporgB = orgsB.split(',');

def compare_lists(list1, list2):
    # Initialize counters and lists to keep track of matches
    same_count = 0
    
    # Find the length of the longest list
    max_length = max(len(list1), len(list2))

    for i in range(max_length):
        # Get the current elements or None if out of range
        elem1 = list1[i] if i < len(list1) else None
        elem2 = list2[i] if i < len(list2) else None

        if elem1 == elem2:
            same_count += 1

    return same_count
        
print(compare_lists(orgsA, orgsB))




