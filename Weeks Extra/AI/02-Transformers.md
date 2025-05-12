# Transformers

Transformers are the core building blocks inside almost every modern LLM. Think of a transformer as a repeating "language-processing unit" that helps the model understand which parts of a sentence matter most, then mixes and refines that information. 

For reference, here is a diagram of the transformer architecture:

<img src="transformers.png" alt="Transformer Diagram" width="450" height="600">

It's very complicated, but in a nutshell, the task of the encoder, on the left half of the transformer architecture, is to map the dense vectors into richer, context-aware representations. This is then given to the decoder. 

The decoder, on the right half of the architecture, receives the output of the encoder together with the decoder output at the previous time step to generate an output sequence. When generating text, each newly chosen token is appended to the input, and the entire stack runs again to pick the token after that.

Today, most LLMs (GPT-style) use a decoder-only stack, meaning that the encoder on the left of the diagram is completely omitted, and the input is directly fed into the decoder. Even so, the process remains similar.

Let's break it down into steps:

### 1. From Tokens to Vectors  
- **Embeddings:** Each token (word, piece of a word, or character) is converted into a list of numbers (a dense vector) that captures its rough meaning.  
- **Positional Encodings:** We add extra numbers, called **positional encodings**, so the model knows the order of tokens. Without these numbers, the dense vector is just a bag of numbers without a specific order.

### 2. Attention
- For each token, the model "looks at" every other token to see which ones are most relevant.  
- It’s like reading a sentence and underlining every word that helps you understand a key idea.

### 3. Multiple "Attention Heads"  
- We do that "looking around" step several times in parallel - each head can focus on a different type of relationship (grammar, topic, keywords, etc.).

### 4. Add & Norm 
- We add the token's original vector back in before and after each step (called a **residual connection**), and then normalize the result (called **layer normalization**).  
- This keeps learning stable and helps the network train faster.

### 5. A Neural Net for Each Token  
- After attention, each token’s vector goes through a small **feed-forward** network. This further mixes the information and adds a bit of "creative" transformation.

### 6. Stacking Blocks
- A real transformer stacks dozens (or even hundreds) of these units on top of each other.  
- Each block refines what the previous block learned, building up a deep understanding of the input.

### 7. Predicting the Next Token  
- At the very end, the vector for the current position is turned into a probability for every token in the vocabulary. This is done using a function called **softmax**.  
- The model then picks (or samples) the next token and repeats the whole process.

---

Even though transformers are being described as simple steps in this lesson, each of these steps has mathematical formulas that generate an output for the next one. For example, this is the 'feed-forward' formula that provides guidance on how to improve future outputs:

$$
\mathrm{FFN}(x) \;=\; \mathbf{W}_2\,\mathrm{ReLU}\bigl(\mathbf{W}_1 x + b_1\bigr) \;+\; b_2
$$

Or, for example, the softmax function:

$$
\mathrm{softmax}(z_i) = \frac{\exp(z_i)}{\sum_{j=1}^{K}\exp(z_j)}
$$

Just keep in mind that transformers aren't simply steps of a process; it is a sequence of complicated algorithms the computer runs to determine what the next token should be.

### Key Takeaway: 
Transformers let every token in your text dynamically "attend" to every other token, then refine that shared information through small neural nets - stacking those steps many times gives LLMs a powerful, context-aware way to predict what comes next.
