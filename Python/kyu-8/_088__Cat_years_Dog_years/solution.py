def human_years_cat_years_dog_years(human_years):
    rules = {
        1: [1, 15, 15],
        2: [2, 24, 24]
    }
    return rules.get(
        human_years,
        [human_years, 24 + (human_years - 2) * 4, 24 + (human_years - 2) * 5]
    )