# 🔐 eVault – Blockchain-Based Evidence Verification and Storage System

eVault is a decentralized platform designed to securely store and verify digital evidence (like signatures, documents, and images) using Blockchain (Ethereum), IPFS (InterPlanetary File System), and Machine Learning. It aims to support investigators, lawyers, and judges by ensuring the integrity and authenticity of digital proof.

---

## 📌 Features

- 🔗 **Blockchain Integration** (Ethereum + Hardhat): Immutable proof storage using smart contracts.
- 🗃️ **IPFS Decentralized Storage**: Stores files in a tamper-proof, distributed manner.
- 🧠 **AI-Based Signature Verification**: Detects forged vs. genuine signatures using ML.
- 🧪 **Evidence Viewer**: Users can view and share files with hash verification.
- 🛡️ **Cybersecurity Module**: Basic cryptography layer for secure communication.

---

## 🏗️ Folder Structure
eVault/
│
├── client/ # Frontend (React)
│ ├── public/ # Static files
│ ├── src/ # React source code
│ └── README.md
│
├── contracts/ # Solidity smart contracts
│ ├── Upload.sol
│ └── cryptography/ # Cryptographic utilities
│
├── Features/ # Signature verification logic
│ ├── Testing/ # Test signature samples
│ └── Training/ # Model training data
│
├── forged/ # Forged signature data
├── real/ # Real signature data
├── TestFeatures/ # Testing ML features
├── scripts/ # Hardhat scripts
│
├── project.ipynb # Jupyter notebook for ML experiments
├── project.py # Backend logic for ML
├── hardhat.config.js # Hardhat configuration
├── package.json # Node.js dependencies
├── .gitignore
└── README.md
