def DNA_strand(dna):
    pairs = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
    return ''.join(pairs[chr] for chr in dna)
    