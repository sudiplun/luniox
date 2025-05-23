---
title: "pdf manipulation on linux "
description: "Merge and split pdf"
date: 2025-05-09
tags: Linux
---

# About qpdf

QPDF is a powerful command-line program for structural, content-preserving transformations of PDF files. It's a versatile tool that lets you manipulate PDFs in many ways without having to understand the complex PDF file format.

## Key features of qpdf:

1. **Merge and split PDFs**: Combine multiple PDFs or extract specific pages
2. **Linearization**: Optimize PDFs for web viewing (fast web view)
3. **Encryption/decryption**: Add or remove password protection
4. **Metadata manipulation**: View or modify PDF metadata
5. **Structure inspection**: Examine the internal structure of PDFs
6. **Repair damaged PDFs**: Fix some types of corrupted PDF files
7. **Convert between PDF versions**: Update older PDFs to newer versions

## Common usage examples:

### Extract specific pages
```
qpdf --empty --pages input.pdf 5-10 -- output.pdf
```

### Remove specific pages (like pages 1-3)
```
qpdf --pages input.pdf 4-z -- input.pdf output.pdf
```

### Merge multiple PDFs
```
qpdf --empty --pages file1.pdf file2.pdf file3.pdf -- combined.pdf
```

### Password protection
```
qpdf --encrypt user-password owner-password 256 -- input.pdf encrypted.pdf
```

### Remove password protection
```
qpdf --password=password --decrypt input.pdf output.pdf
```

### Linearize for web viewing
```
qpdf --linearize input.pdf output.pdf
```

QPDF is available for all major operating systems (Linux, macOS, Windows) and is a great alternative to pdftk with a more modern codebase and active development. <br>

_Content was generated by AI_
