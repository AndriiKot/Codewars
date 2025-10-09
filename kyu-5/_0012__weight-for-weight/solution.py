def order_weight(s):
    def sort_weight(num):
        return (sum(int(c) for c in num), num)  

    return ' '.join(sorted(s.split(), key=sort_weight))

print(order_weight('103 123 4444 99 2000'))
