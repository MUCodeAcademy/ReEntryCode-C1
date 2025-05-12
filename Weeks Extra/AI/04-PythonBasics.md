# Python Basics

We're going to go over the basic syntax rules of Python, since Python is commonly used for AI development, and so you can make sense of my example project later on.

## Why Python for AI?

- **Libraries:** Python already has a lot of libraries for AI and data science; the main ones you might see are `numpy`, `pandas`, `tensorflow`, and `pytorch`.
- **Software:** Software, like Stable Diffusion for generating AI images, or others for generating text, often run with Python.
- **Community Support:** A large, active community means lots of tutorials, forums, and resources.
- **Integration:** Python works well with other languages and tools, making it flexible for research and production.

## Python vs. JavaScript: Syntax Basics

If you want a slightly longer overview, you can check out the [04-Python.md](../../AdditionalTopics/Languages/04-Python.md) file in the Languages folder. Here are the main syntax rules to remember:

1. Don't use `let`, `var`, or `const` to make variables:

    ```python
    x = 5
    name = "Luce"
    ```

2. Creating functions look like this:

    ```python
    def greet(name):
        return "Hello, " + name
    ```

3. Don't add semicolons to the end of lines. Additionally, tab indents matter:

    ```python
    def greet(name):
        return "Hello, " + name

    # This is not the same as above, and will give you an error because the second line is not indented
    def greet(name):
    return "Hello, " + name 
    ```

4. Don't use curly brackets or parenthesis for logic. Instead, use colons and indentation:

    ```python
    x = 5
    if x > 5:
        print('x is greater than 5')
    elif x < 5:
        print('x is less than 5')
    else:
        print('x is 5')
    ```
