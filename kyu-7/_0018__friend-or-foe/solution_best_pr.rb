def friend(friends)
  friends.select { |name| name.size === 4 }
end
