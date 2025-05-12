# Quiz

### Section 1: Multiple-Choice (choose the best answer)
1. **What is the main purpose of tokenization in an LLM?**  
    A. To filter out stop-words  
    B. To split input text into units the model can process  
    C. To convert embeddings back into text  
    D. To normalize punctuation  

2. **Which of these is a subword tokenization method?**  
    A. Softmax  
    B. Byte-Pair Encoding (BPE)  
    C. Beam Search  
    D. Residual Connection  

3. **In a transformer, which mechanism lets each token "look at" every other token?**  
    A. Feed-Forward Network  
    B. Self-Attention  
    C. Positional Encoding  
    D. Cross-Entropy Loss  

4. **Typical embedding dimensions in modern LLMs are on the order of:**  
    A. 768–2,560  
    B. 10–50  
    C. 100–300  
    D. 10,000–50,000  

5. **Which training stage directly uses human preference data to shape model outputs?**  
    A. Pretraining  
    B. Supervised Fine-Tuning  
    C. Reinforcement Learning from Human Feedback (RLHF)  
    D. Tokenization  

## Section 2: True or False

6. Decoder-only models (like GPT) omit the encoder half of the original Transformer architecture.  (true/false)
7. Positional encodings give the model information about the order of tokens.  (true/false)
8. RLHF guarantees that models will never produce hallucinations.  (true/false)
9. According to scaling laws, doubling the dataset size will more than double the model's performance.  (true/false)
10. Residual connections help stabilize and speed up transformer training.  (true/false)

## Section 3: Short Answer

11. Define "hallucination" in the context of LLMs.
<br><br><br><br><br>

12. What is self-supervised learning?
<br><br><br><br><br>

13. Explain Retrieval-Augmented Generation (RAG).
<br><br><br><br><br>

## Section 4: Fill in the Blank

1. Converting token IDs into fixed-size vectors is done by the **______________ layer**.  
2. The function that turns raw scores into a probability distribution over tokens is called **______________**.  
3. A basic Transformer block has two main sub-layers: **______________** and **______________**.  

## Section 5: Matching

Match each term (on the left) with its role or definition (on the right).

| Term                   | Definition                                            |
|------------------------|-------------------------------------------------------|
| A. Token Embedding     | 1. Adds information about each token's position       |
| B. Positional Encoding | 2. Maps each token ID to a dense vector               |
| C. Self-Attention      | 3. Shortcut that adds a layer's input to its output   |
| D. Residual Connection | 4. Computes relevance scores between all token pairs  |