const number = (busStops) => busStops.reduce((peopel, busStop) => (peopel += busStop[0] - busStop[1]), 0);
