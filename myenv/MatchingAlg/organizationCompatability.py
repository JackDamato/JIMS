def compare_orgs(list1, list2):
    if list1 is None or list2 is None:
        return 0
    temporgsA = list1.split(',')
    temporgsB = list2.split(',')
    # Initialize counters and lists to keep track of matches
    same_count = 0

    for i in range(len(temporgsA)):
        for j in range(len(temporgsB)):
            if temporgsA[i] == temporgsB[j]:
                same_count += 1
   
   
    return same_count * 10
        





