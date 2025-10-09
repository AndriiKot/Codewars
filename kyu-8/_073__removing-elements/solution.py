def remove_every_other(my_list):
    return [el for i, el in enumerate(my_list,start=1) if (i & 1)]
