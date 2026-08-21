---
title: Machine Learning Data Challenges and Solutions
description: The different Data Challenges and possible solution reasonings
tags:
  - AI
  - Commercial
---

View Full Report:  [[AI_Across_Industries_Newsletter.pdf]]]
Supporting Document: [[AI-Across-Industries-Group-Activity.pdf]]


> [!NOTE]+
> ### Introduction
> 
> This report examines some of the data cahllenges in machine learning ie data imbalance, data drift and data bias. It explains the techniques and metrics that can be used to address them. The concpets are demonstrated through real world examples and industries such as fraud detection, engine manufacturing and healthcare.

---

> [!NOTE]+
> ### Objective
> 
> The objective of this artifact was to develop a practical understanding of common machine learning data challenges and learn how to select appropriate techniques and metrics to address them. I wanted to connect the concepts from the course to real-world applications, particularly applications that relate to fraud detection, automotive manufacturing, and healthcare.
> 

---

> [!NOTE]+
> ### Process
> I researched by looking through the course material , selecting real world examples and common data challenges
> 
> I selected the following common data challenges:
> - Data Imbalance
> - Data Drift
> - Data Bias
> - Data Integration
> 
> I then connected each challenge to a real-world application:
> 
> - **Fraud detection** → Data imbalance
> - **Automotive engine manufacturing** → Data drift
> - **Healthcare disease diagnosis** → Data bias
> - **Healthcare medical imaging** → Data integration
> 
> For each example, I identified the potential impact of the data problem, researched an appropriate technique for handling it, and selected a metric that could be used to evaluate the results.
> 
> For example, for fraud detection, I examined **oversampling, undersampling, and SMOTE** as techniques for addressing data imbalance. I also identified **recall and precision** as important metrics because a fraud-detection model needs to identify actual fraud while limiting false fraud alerts.
> 
> For automotive manufacturing, I examined **recency-based weighting and retraining** as ways to address data drift and identified metrics such as **recall, precision, false-negative rate, and Population Stability Index (PSI)** for monitoring performance.
> 

---

> [!NOTE]+
> ### Tools
> 
> The primary tools used to develop this artifact were:
> 
> - **Course materials** — Used to understand the concepts and requirements related to machine learning data quality.
> - **School AI Spaces**  — Used to  brainstorm examples, organize ideas, explain machine learning concepts, and refine the written content.
> - **Microsoft Word/Google Docs** — Used to organize and format the report and artifact.

---

> [!NOTE]+
> ### Value Proposition
> 
> This artifact demonstrates my ability to identify machine learning data challenges, select appropriate solution and determine meaningful metrics for evaluating those solutions,
> 
> The artifact also demonstrates that I can apply machine learning concepts to different industries rather than only understanding them theoretically. The automotive manufacturing example is especially relevant to my professional interests because data from engine sensors and manufacturing systems could be used to predict failures and improve quality.
> 
> The value of this artifact is that it provides a practical framework for approaching machine learning projects:
> 

---

### Key Learning Summary

|Data Challenge|Industry/Application|Example|Impact|Technique for Handling|Metrics|
|---|---|---|---|---|---|
|**Data Imbalance**|Finance — Fraud Detection|1,000,000 legitimate transactions vs. 1,200 fraud cases|Model may favor legitimate transactions and miss fraud|Oversampling, undersampling, or **SMOTE**|**Recall:** TP/(TP+FN); **Precision:** TP/(TP+FP)|
|**Data Drift**|Automotive — Engine Manufacturing|New engine design or manufacturing process changes sensor data|Model may become less accurate over time|Combine historical and current data using **recency-based weighting** and retrain when needed|Recall, precision, false-negative rate, **PSI**|
|**Data Bias**|Healthcare — Disease Diagnosis|Training data does not adequately represent all patient populations|Model may produce unequal or unreliable results for certain groups|Use diverse, representative datasets and conduct bias audits|Recall, precision, false-positive rate, false-negative rate by group|
|**Data Integration**|Healthcare — Medical Imaging|Combining X-rays, patient records, lab results, and medical history from different systems|Inconsistent or incomplete inputs can reduce model reliability|Standardize formats, units, timestamps, and validation processes|Data completeness, duplicate rate, invalid-record rate, integration success rate|

---

> [!NOTE]
> ### References
> - [[CM4 - Data Challenges in ML]]
