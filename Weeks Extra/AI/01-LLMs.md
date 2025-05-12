# How Large Language Models (LLMs) Work: The Fundamentals

I would like to emphasize that this is a ***heavily*** simplified version of LLMs, but it will give you a good fundamental understanding.

## What is a Large Language Model?

A Large Language Model (LLM) is a neural network trained to predict the next token in a sequence of text. By optimizing this next-token objective across billions of parameters, LLMs learn patterns of syntax, semantics, and certain reasoning abilities—without explicit symbolic rules.

## Key Components of LLMs

### 1. Tokenization

Before an LLM can process text, it breaks the text into smaller units called **tokens**. Tokens can be words, parts of words, or characters. For example:

- The sentence "Hello, world!" might be tokenized into: `["Hel", "lo", ",", "world", "!"]`
    - Rare or long words are split into familiar subwords (e.g. "transformers" = ["trans", "form", "ers"]).
    - This is just an example; different models might tokenize inputs differently. Some methods of tokenization are Byte-Pair Encoding (BPE), WordPiece, or Unigram.
- This helps the model handle different languages and complex words efficiently.

In order for a machine to understand human text, we need to convert our text into a machine-readable format, similarly to why we need a compiler to convert our JavaScript code into machine code when we run our websites. During the **embedding** process, each token is mapped to a **dense vector**, which are represented as arrays of floating-point (i.e. decimal) numbers. Below is an example of a dense vector that might represent the "Hello World!" text:

```js
[
    -0.01305,  
    0.02039, 
    -0.00787,  
    ...  // could potentially keep going up to ~80,000 values, typically stopping at either 768, 1024, or 2560 dimensions
]
```

If we created dense vectors for every word in a book, we would be able to identify relationships. For example, maybe all the days of the week are grouped together, or you could perform 'word-based' arithmetic:

`king - man + woman = queen`

All of this is achieved using complex neural nets, which identify patterns from massive amounts of text data and translate them into dense vectors. This will inevitably help the AI understand which words are associated with others, and understand the context behind the data its being given.

### 2. Transformers

Most modern LLMs are backed by an architecture called **transformers**.

Before transformers, LLMs were very limited because they processed one token at a time, which caused problems when trying to create relationships between tokens that were far apart. Imagine trying to write a sentence, but you don't know any of the other words except for the previous one; it would be very difficult to stay coherent. In 2017, Vaswani et al. (Google Brain) published "Attention Is All You Need", which introduced the transformer architecture. This was a major breakthrough: models could now consider all tokens in a sequence at once, giving them context for generation and enabling far more coherent outputs. Effectively, this lets each token 'see' and 'talk' to one another.

Transformers look at all parts of the input text and decide which parts are most relevant to each other. It does this multiple times, then it generates new text by predicting the next token in the sequence.

### 3. Training Process

LLMs are trained using a process called **unsupervised learning**. Here's how it generally works:

- **Data Collection:** The model is fed massive amounts of text from books, articles, and websites.
- **Learning Patterns:** It learns to predict the next word in a sentence, gradually improving its understanding of language.
- **Fine-Tuning:** After initial training, models can be fine-tuned for specific tasks, like answering questions or writing code.

To put it simply, LLMs work by taking in a prompt, and then predicting the next token in the sequence. There's a ton of complicated math that goes into it, but this is how it works at a high level: it scores every possible token given the prior context, converts scores into probabilities, and then picks one. It does __not__ understand the meaning of the words, but by giving it enough training data, writing a good prompt, and using a lot of math, it can generate a response that is actually surprisingly good. We can use this formula in many different ways; for example, image generation also predicts the next token, but instead of the tokens being `words`, the model predicts the next `pixel` in the image.

## Models

When you use LLMs, you'll often see models like GPT-4o, Gemini, Llama, or Claude. There are many different models, but they're all based on the same underlying architecture, just with different training data and improvements. Some models might be trained for a specific task, like writing code, writing stories, or even roleplaying a specific character. Image models might be trained to generate images in a specific style, or of a certain object or character.

You can download many of these models for free, and run them locally on your own computer.

## Limitations

- **Lack of Common Sense:** LLMs don't have a true understanding of the world, nor do they truly understand the meaning of the words they're using. They can make up facts and 'hallucinate'.
- **Context Window:** LLMs have a limited context window. They can only look at a certain number of tokens in the past and future (currently around 8000 tokens for most models).
- **Cost:** LLMs are very expensive, both in terms of money and electricity, to train and run.
- **Hardware:** LLMs require a lot of memory and processing power (specifically GPU), which makes them difficult to run on personal computers and can cause hardware scarcity as more companies need better hardware.

## Ethical Concerns

- **Bias:** LLMs learn from historical data, which can reflect societal prejudices of that point in history, which can then make the model reinforce those prejudices. This can often be trained out, however.
- **Privacy:** Training and operating AI often requires a lot of data, which can be sensitive or private.
- **Copyright:** Since LLMs can be trained on copyrighted material, they can generate text or images that are very similar to those works, or imitate the style of certain artists.
- **Misinformation:** LLMs can unintentionally fabricate information, or generate highly realistic images or videos to deceive others.
- **Security:** Small, sometimes imperceptible deviations to inputs can trick AI systems into misclassifying or misbehaving. In a similar sense, they can be used for phishing, malware, and other malicious activities.

Keep in mind that today's LLMs are examples of **narrow AI** - they're great at language prediction, but lack true understanding. Artificial General Intelligence (AGI), by contrast, would exhibit flexible, human-level reasoning across any domain - but current models are not AGI. Since LLMs work purely by predicting the most likely next token, they don't "understand" the meaning of what they're outputting. Additionally, because of human-based training, they often prioritize responses that seem helpful or user-pleasing over purely factual ones. This can lead them to automatically agree with or placate you, even when they're wrong.

AGI remains a long-term goal. Experts debate if and when we'll ever get there, but for now, remember that LLMs are statistical text generators, not thinking machines.