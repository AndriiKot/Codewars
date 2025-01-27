class String
  def toJadenCase
    self.split.map!(&:capitalize).join(' ')
  end
end