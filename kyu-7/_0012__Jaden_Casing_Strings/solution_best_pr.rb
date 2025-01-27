class String
  def toJadenCase
    split(' ').map!(&:capitalize) * ' '
  end
end