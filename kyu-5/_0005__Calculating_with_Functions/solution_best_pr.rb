{
  :zero  => 0,
  :one   => 1,
  :two   => 2,
  :three => 3,
  :four  => 4,
  :five  => 5,
  :six   => 6,
  :seven => 7,
  :eight => 8,
  :nine  => 9
}.each do |meth, val|
  define_method("#{meth}") { |op = nil| op.nil? ? val : val.send(*op) }
end

{
  plus:       :+,
  minus:      :-,
  times:      :*,
  divided_by: :fdiv
}.each{ |meth, op| define_method(meth) {|other|  [op, other] } }


p one(plus(one()))
p two(times(seven()))



