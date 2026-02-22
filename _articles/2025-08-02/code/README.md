# Attention Mechanism Code

Implementations accompanying the [Transformer Attention Mechanism](https://blueside.ai/posts/2025-08-02-transformer-attention/) post.

## Files

- `self_attn.py` — step-by-step self-attention, then encapsulated as a `SelfAttention` class
- `masked_self_attn.py` — causal (masked) self-attention using the pre-softmax `-inf` approach
- `multi_head_attn.py` — `MultiHeadAttentionWrapper` running multiple independent attention heads

## Setup

Requires [uv](https://docs.astral.sh/uv/getting-started/installation/).

```bash
uv sync
```

This installs all dependencies (torch, numpy) into an isolated virtual environment using the pinned versions from `uv.lock`.

## Running

```bash
uv run self_attn.py
uv run masked_self_attn.py
uv run multi_head_attn.py
```

Run them in order — `masked_self_attn.py` and `multi_head_attn.py` import `embedded_sentence` and `SelfAttention` from `self_attn.py`.
