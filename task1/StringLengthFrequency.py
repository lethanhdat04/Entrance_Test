from collections import Counter

def most_frequent_string_lengths(strings):
    if not strings:
        return []
    
    length_counts = Counter(len(s) for s in strings)
    max_count = max(length_counts.values())
    most_frequent_lengths = {length for length, count in length_counts.items() if count == max_count}
    
    return [s for s in strings if len(s) in most_frequent_lengths]

def test_most_frequent_string_lengths():
    test_cases = [
        (['a', 'ab', 'abc', 'cd', 'def', 'gh'], ['ab', 'cd', 'gh']),
        (['a', 'bb', 'ccc', 'dd', 'e', 'ff'], ['bb', 'dd', 'ff']),
        (['test', 'data', 'more', 'info'], ['test', 'data', 'more', 'info'])
    ]
    
    for i, (input_data, expected) in enumerate(test_cases):
        result = most_frequent_string_lengths(input_data)
        assert set(result) == set(expected), f"Test case {i+1} failed: expected {expected}, got {result}"
        print(f"Test case {i+1}: PASSED")
    
    print("All test cases passed!")

if __name__ == "__main__":
    test_most_frequent_string_lengths()
    
    print("\nExample usage:")
    example_input = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
    result = most_frequent_string_lengths(example_input)
    print(f"Input: {example_input}")
    print(f"Output: {result}")