def DNA_strand(dna)
  pairs = { 'A' => 'T', 'T' => 'A', 'G' => 'C', 'C' => 'G' }
  dna.gsub(/\w/) {|chr| pairs[chr] }                                 
end


def DNA_strand_2(dna)
  dna.gsub(/[ATGC]/, "A" => "T", "T" => "A", "C" => "G", "G" => "C")
end

p DNA_strand('ATTGC')