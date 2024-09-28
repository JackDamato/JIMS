def majorCompatability(majorA, majorB, yearA, yearB):
    if majorA == majorB:
        if yearA == yearB:
            return 15
        elif abs(int(yearA) - int(yearB)) == 1:
            return 10
        else:
            return 5

    if yearA == yearB:
        return 5
    return 0