import re

def dna_to_rna(dna):
    return re.sub(r'T', r'U', dna)