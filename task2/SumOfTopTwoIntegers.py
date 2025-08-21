def sum_of_top_two(numbers):
    first_max = second_max = float('-inf')
    
    for num in numbers:
        if num > first_max:
            second_max = first_max
            first_max = num
        elif num > second_max:
            second_max = num
    
    return first_max + second_max

def test_sum_of_top_two():
    test_cases = [
        ([1, 4, 2, 3, 5], 9),
        ([10, 20, 30, 40, 50], 90),
        ([100, 1], 101),
        ([7, 7, 7, 7, 7], 14),
        ([42, 17, 99, 23, 84], 183)
    ]
    
    for i, (input_data, expected) in enumerate(test_cases):
        result = sum_of_top_two(input_data.copy())
        assert result == expected, f"Test case {i+1} failed: expected {expected}, got {result}"
        print(f"Test case {i+1}: PASSED")
    
    print("All test cases passed!")

if __name__ == "__main__":
    test_sum_of_top_two()
    
    print("\nExample usage:")
    example_input = [1, 4, 2, 3, 5]
    result = sum_of_top_two(example_input)
    print(f"Input: {example_input}")
    print(f"Output: {result}")