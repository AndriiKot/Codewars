def how_many_light_sabers_do_you_own(name="")
  name == "Zach" ? 18 : 0
end

def howManyLightsabersDoYouOwn *args
    args.last == 'Zach' ? 18 : 0
end

def how_many_light_sabers_do_you_own(*names)
  names.include?("Zach") ? 18 : 0
end
