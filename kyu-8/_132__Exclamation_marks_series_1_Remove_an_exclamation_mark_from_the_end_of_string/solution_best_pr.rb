def remove(s)
  s.gsub(/!$/, '')
end

# or

def remove(s)
  s.chomp('!')
end

# or

def remove(s)
  s.delete_suffix('!')
end

# or

def remove(s)
  s.sub(/!$/,'')
end


def define_method_with_args(name, target_method, *extra_args)
  define_method(name) do |arg|
    arg.public_send(target_method, *extra_args)
  end
end

define_method_with_args :remove, :chomp, '!'

p remove('!!HI!!')


def define_method_with_args(name, target_method, arg=nil)
  define_method(name) do |value|
    value.send(target_method, arg)
  end
end

define_method_with_args :remove, :chomp, '!'

p remove('!!HI!!')




