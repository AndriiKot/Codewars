def solution(nums):
    return (nums or []) and sorted(nums)

# or

def solution(nums):
    return sorted(nums or [])