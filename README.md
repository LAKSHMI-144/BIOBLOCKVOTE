
# BioBlockVote

## Privacy-Preserving Biometric E-Voting System

BioBlockVote is a privacy-preserving electronic voting system that combines **biometric voter verification** with **blockchain-based vote recording**.

The system is designed to improve voter authentication, prevent duplicate voting, and provide a tamper-resistant mechanism for recording votes.

## Key Features

- Biometric-based voter verification
- Face detection using YuNet
- Liveness detection using MobileNetV3
- Face recognition using InsightFace and ArcFace
- Voter eligibility and duplicate-vote checking
- Secure vote recording using blockchain
- Smart contract-based voting
- Audit logging
- Election result generation

## Technology Stack

### Frontend
- React 19.x
- Vite

### Backend
- Node.js 22 LTS
- Express 5.x

### AI & Computer Vision
- Python 3.11.x
- Flask
- OpenCV 4.10+
- YuNet
- MobileNetV3
- InsightFace 0.7.3
- ArcFace

### Database
- MySQL 8.4 LTS

### Blockchain
- Local Ethereum
- Solidity 0.8.x
- Hardhat
- ethers v6

### API Testing
- Postman

## System Workflow

```text
Voter Registration
        ↓
Face Capture
        ↓
YuNet Face Detection
        ↓
MobileNetV3 Liveness Detection
        ↓
ArcFace Face Recognition
        ↓
Voter Verification
        ↓
Eligibility Check
        ↓
Candidate Selection
        ↓
Vote Submission
        ↓
Blockchain Recording
        ↓
Vote Confirmation
        ↓
Results
