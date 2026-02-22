---
layout: post
title: "Transformer Attention Mechanism"
date: 2025-08-02
permalink: /posts/2025-08-02-transformer-attention/
tags: [self-attention, multi-head-attention]
description: "My notes after reading on the attention mechanism behind the transformer introduced in 'Attention is All You Need'."
github: "https://github.com/jdspell/blueside/tree/main/_articles/2025-08-02/code"
github_label: "attention code"
published: true
---

## Resources

The content in this post is based on my notes from the following resources. I highly recommend exploring these directly for a deeper understanding.

- [Understanding and Coding Self-Attention](https://magazine.sebastianraschka.com/p/understanding-and-coding-self-attention) — Sebastian Raschka
- [Illustrated Guide to Attention Mechanism](https://theaisummer.com/attention/) — AI Summer
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Vaswani et al., 2017
- [Neural Machine Translation by Aligning and Translating](https://arxiv.org/abs/1409.0473) — Bahdanau et al., 2014
- [The Illustrated Transformer](https://lilianweng.github.io/posts/2018-06-24-attention/) — Lilian Weng, 2018

## Overview

Starting with self-attention, we learn how an input is transformed to query, key, and value components using the respective weight matrices. The following procedure multiplies queries by keys to obtain attention scores, which are then normalized with the softmax function to get attention weights.

These weights are multiplied against the values matrix computed from the input, and the result is a context vector for the input. The computation of a single context vector is done with a single head, and this can be extended to multiple heads. The process of multi-head attention is simply computing context vectors independently for each head. The result is then concatenated and returned.

Finally, to ensure that the context vector does not contain predictions for future words within the input (i.e., each word only depends on preceding words), we can apply a mask. This is equivalent to zeroing out the upper-right triangle of the context matrix, with normalization occurring before or after to ensure each row sums to 1. Masking is particularly useful when generating output sequences to prevent future token leakage.

## History

Sequence-to-sequence learning was originally dominated by encoder-decoder architectures linked by a single context vector. The encoder/decoder models were typically RNNs or LSTMs. These models struggled with long sequences due to issues like vanishing gradients and forgotten inputs.

A key limitation was the fixed-length context vector, which could fail to capture all relevant input information. Attention was introduced to directly connect each output to the entire input sequence, enabling the model to weight different parts of the input as needed.

## Intuition

- Attention is about finding alignment between pieces of an input. Attention scores reflect how "aligned" two tokens are.
- A single token can align with multiple other tokens — attention allows for one-to-many relationships.
- As sequence length increases, attention's computational cost grows quadratically.
- Connecting the context vector to the full input sequence is critical to ensure no information is lost in long sequences.
