// QUIZHUB - ONLINE QUIZ SYSTEM

const questionBank = {
    
    "AI": [
        {
            question: "An AI system must classify emails as spam or not spam using previously labelled examples. Which learning paradigm is most appropriate?",
            answers: ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Evolutionary computation"],
            correct: 1,
            explanation: "Supervised learning uses labelled training examples. Here, each email has a known class (spam or not spam), allowing a classifier to learn the relationship between email features and labels."
        },
        {
            question: "A search algorithm expands the node with the lowest estimated total cost f(n) = g(n) + h(n). Which algorithm is being used?",
            answers: ["Depth-First Search", "Breadth-First Search", "A* Search", "Hill Climbing"],
            correct: 2,
            explanation: "A* evaluates each node using f(n) = g(n) + h(n), where g(n) is the cost already incurred and h(n) estimates the remaining cost. With an admissible heuristic, it can find an optimal path."
        },
        {
            question: "In a neural network, what is the primary purpose of a non-linear activation function?",
            answers: ["To increase the number of input features", "To enable the network to model non-linear relationships", "To remove all training errors", "To guarantee global optimization"],
            correct: 1,
            explanation: "Without non-linear activations, multiple layers of linear transformations collapse into a single linear transformation. Functions such as ReLU and sigmoid allow neural networks to learn complex non-linear patterns."
        },
        {
            question: "A robot receives a positive reward for reaching a destination and a penalty for collisions. Which AI approach best describes its learning process?",
            answers: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Association rule mining"],
            correct: 2,
            explanation: "Reinforcement learning trains an agent through interaction with an environment. The agent learns a policy that maximizes cumulative reward while considering the consequences of its actions."
        },
        {
            question: "Which statement best describes the bias-variance trade-off in machine learning?",
            answers: ["Both bias and variance always decrease together", "High bias causes overfitting", "High variance often indicates sensitivity to training data", "Variance is unrelated to model complexity"],
            correct: 2,
            explanation: "High variance means a model changes significantly with different training samples and may overfit. High bias means the model is too simple to capture the underlying pattern, causing underfitting."
        },
        {
            question: "A decision tree selects a feature that produces the largest reduction in uncertainty about the target class. Which measure is commonly used?",
            answers: ["Euclidean distance", "Information gain", "Mean squared error only", "Cosine similarity"],
            correct: 1,
            explanation: "Information gain measures the reduction in entropy after splitting data using a feature. A larger information gain indicates that the split provides more useful information about the target."
        },
        {
            question: "Why is pruning performed on a decision tree?",
            answers: ["To increase the number of unnecessary branches", "To reduce overfitting and improve generalization", "To convert labels into pixels", "To eliminate the training dataset"],
            correct: 1,
            explanation: "Pruning removes branches that provide little predictive value. This reduces model complexity and can improve performance on unseen data."
        },
        {
            question: "In natural language processing, what does tokenization do?",
            answers: ["Converts text into smaller units such as words or subwords", "Encrypts all text permanently", "Removes the need for language models", "Converts text directly into images"],
            correct: 0,
            explanation: "Tokenization divides text into manageable units called tokens. These tokens are mapped to numerical representations so language-processing models can process them."
        },
        {
            question: "Which technique is most suitable for representing semantic relationships between words as dense numerical vectors?",
            answers: ["One-hot encoding only", "Word embeddings", "Binary search", "Min-max scaling"],
            correct: 1,
            explanation: "Word embeddings represent words as dense vectors in a continuous space. Words used in similar contexts often have vectors that are close to one another."
        },
        {
            question: "A convolutional neural network is being designed for image classification. What is the main role of convolutional filters?",
            answers: ["To detect local patterns such as edges and textures", "To sort images alphabetically", "To replace all training labels", "To guarantee zero classification error"],
            correct: 0,
            explanation: "Convolutional filters slide across image regions and learn local features such as edges, textures and shapes. Deeper layers combine these features into higher-level visual representations."
        },
        {
            question: "Which problem is most directly addressed by attention mechanisms in sequence models?",
            answers: ["Allowing the model to focus on relevant parts of the input", "Removing the need for training data", "Guaranteeing constant-time inference", "Converting every sequence into a fixed label before processing"],
            correct: 0,
            explanation: "Attention assigns different weights to input positions according to their relevance. This helps a model use important contextual information, including information far away in a sequence."
        },
        {
            question: "In a minimax game tree, what does the MAX player attempt to do?",
            answers: ["Minimize the opponent's score directly", "Choose the move that maximizes the utility assuming optimal play", "Select a random leaf node", "Avoid evaluating terminal states"],
            correct: 1,
            explanation: "Minimax assumes both players act optimally. MAX chooses the action with the highest achievable minimax value, while MIN chooses actions that reduce that value."
        },
        {
            question: "Which condition is required for a heuristic to be admissible in A* search?",
            answers: ["It must always overestimate the remaining cost", "It must never overestimate the true minimum remaining cost", "It must be equal to zero for every node", "It must ignore the goal state"],
            correct: 1,
            explanation: "An admissible heuristic is optimistic: it never estimates a remaining cost greater than the true minimum cost. This property supports optimality of A* under the standard search conditions."
        },
        {
            question: "A medical AI classifier has 99% accuracy but misses many actual disease cases. Which metric should be examined especially carefully?",
            answers: ["Recall or sensitivity", "Training time", "Number of model parameters only", "File compression ratio"],
            correct: 0,
            explanation: "Recall measures the proportion of actual positive cases correctly identified. In disease screening, low recall means many affected patients are missed, even when overall accuracy appears high."
        },
        {
            question: "What is the purpose of a confusion matrix in classification?",
            answers: ["To display counts of true and false predictions by class", "To calculate processor clock speed", "To store neural network weights", "To automatically remove missing values"],
            correct: 0,
            explanation: "A confusion matrix compares predicted classes with actual classes. It shows true positives, true negatives, false positives and false negatives, helping evaluate different types of classification errors."
        },
        {
            question: "An AI model performs very well on training data but poorly on validation data. What is the most likely issue?",
            answers: ["Underfitting", "Overfitting", "Perfect generalization", "Data normalization"],
            correct: 1,
            explanation: "This pattern is a common sign of overfitting. The model has learned training-specific details or noise that do not generalize to unseen examples."
        },
        {
            question: "Which method can help reduce the impact of class imbalance during classifier training?",
            answers: ["Oversampling the minority class", "Deleting all minority-class examples", "Using training accuracy as the only metric", "Removing the target variable"],
            correct: 0,
            explanation: "Oversampling increases the representation of the minority class, sometimes using techniques such as SMOTE. It can help the model learn minority-class patterns, although evaluation must use an appropriate data split."
        },
        {
            question: "What is the main purpose of explainable AI (XAI)?",
            answers: ["To make model decisions more understandable to humans", "To guarantee that every prediction is correct", "To eliminate all model parameters", "To prevent models from using data"],
            correct: 0,
            explanation: "Explainable AI develops methods for understanding why a model produced a particular prediction. It is useful for auditing, debugging, accountability and high-impact decision-making."
        },
        {
            question: "A model is trained on data containing future information that would not be available at prediction time. What is this problem called?",
            answers: ["Data leakage", "Feature scaling", "Regularization", "Dimensionality reduction"],
            correct: 0,
            explanation: "Data leakage occurs when information unavailable at real prediction time enters model training or evaluation. It creates unrealistically good results and leads to poor real-world performance."
        },
        {
            question: "Which statement about generative AI is most accurate?",
            answers: ["It only sorts existing records", "It learns data patterns and can generate new content", "It always retrieves an exact database record", "It cannot produce text or images"],
            correct: 1,
            explanation: "Generative AI models learn statistical patterns in training data and use them to generate new content, such as text, images, audio or code. Generated output can still contain errors and needs evaluation."
        }
    ],

    "Cloud Computing": [
        {
            question: "An organization wants to deploy an application without managing virtual machines or operating systems. Which cloud service model is most suitable?",
            answers: ["IaaS", "PaaS", "On-premises hosting", "Bare-metal hardware rental"],
            correct: 1,
            explanation: "Platform as a Service provides a managed application platform, including runtime and infrastructure management. Developers focus mainly on application code rather than operating-system administration."
        },
        {
            question: "Which cloud characteristic allows resources to be provisioned and released rapidly according to demand?",
            answers: ["Resource pooling", "Rapid elasticity", "Fixed capacity", "Manual provisioning"],
            correct: 1,
            explanation: "Rapid elasticity enables computing resources to scale up or down as workload demand changes. This helps organizations avoid permanently provisioning for peak demand."
        },
        {
            question: "A web application must remain available even if one availability zone fails. Which architecture is most appropriate?",
            answers: ["Deploy all instances in one zone", "Deploy redundant instances across multiple availability zones", "Use one physical server", "Disable health checks"],
            correct: 1,
            explanation: "Distributing redundant instances across independent availability zones reduces the risk of a single-zone failure taking down the application. Load balancing and health checks can redirect traffic to healthy instances."
        },
        {
            question: "Which statement best describes a cloud region?",
            answers: ["A single virtual machine", "A geographical area containing multiple data centres or availability zones", "A user account", "A programming language"],
            correct: 1,
            explanation: "A cloud region is a geographical deployment area. It generally contains multiple isolated availability zones, allowing customers to choose locations for latency, compliance and resilience."
        },
        {
            question: "A company needs to process variable workloads and wants to pay only for compute time consumed, without managing servers. Which approach is suitable?",
            answers: ["Serverless computing", "Dedicated fixed-capacity servers only", "Manual desktop processing", "Local-only storage"],
            correct: 0,
            explanation: "Serverless computing lets developers run code through managed services without provisioning or maintaining servers. Billing is often based on invocations, execution duration or resource consumption."
        },
        {
            question: "Which cloud storage class is generally appropriate for data accessed rarely but retained for long periods?",
            answers: ["Frequent-access hot storage", "Archive or cold storage", "Temporary cache only", "In-memory database only"],
            correct: 1,
            explanation: "Archive or cold storage is designed for infrequently accessed data and often has lower storage costs. Retrieval may take longer and can incur additional charges."
        },
        {
            question: "What is the main purpose of an auto-scaling group?",
            answers: ["To automatically adjust the number of compute instances based on policies or demand", "To encrypt every database record manually", "To replace DNS", "To prevent all network traffic"],
            correct: 0,
            explanation: "Auto-scaling changes the number of instances according to configured metrics, schedules or health conditions. It helps maintain performance while controlling infrastructure costs."
        },
        {
            question: "Which technology provides isolated, portable application environments while sharing the host operating-system kernel?",
            answers: ["Containers", "Physical partitions only", "Optical networks", "Tape archives"],
            correct: 0,
            explanation: "Containers package applications and dependencies into isolated environments while sharing the host kernel. They are generally lighter than full virtual machines."
        },
        {
            question: "What is the primary role of a hypervisor in virtualization?",
            answers: ["To manage and run virtual machines on physical hardware", "To translate domain names", "To compress database tables", "To design user interfaces"],
            correct: 0,
            explanation: "A hypervisor creates and manages virtual machines by allocating physical resources such as CPU, memory and storage. It provides isolation between virtual machine environments."
        },
        {
            question: "A cloud object-storage bucket must not be publicly accessible. Which control is most directly relevant?",
            answers: ["Public access block and restrictive access policies", "Increasing CPU size", "Disabling encryption", "Changing the file extension"],
            correct: 0,
            explanation: "Public-access restrictions and least-privilege bucket policies prevent unintended external access. Access should be granted only to approved identities and services."
        },
        {
            question: "What does the principle of least privilege require?",
            answers: ["Give every user administrator access", "Grant only the permissions necessary for a task", "Share one root account with everyone", "Disable identity management"],
            correct: 1,
            explanation: "Least privilege limits users and services to the minimum permissions required for their responsibilities. It reduces the potential impact of compromised credentials or accidental actions."
        },
        {
            question: "Which service translates human-readable domain names into IP addresses?",
            answers: ["DNS", "DHCP", "NTP", "SMTP"],
            correct: 0,
            explanation: "The Domain Name System resolves domain names into IP addresses and other records. It allows clients to locate services without memorizing numeric addresses."
        },
        {
            question: "A company connects its private data centre to a cloud network using a dedicated private connection. What is the main benefit?",
            answers: ["A dedicated connectivity path with more predictable network performance", "Automatic elimination of all security risks", "Unlimited bandwidth at no cost", "Removal of all routing requirements"],
            correct: 0,
            explanation: "A dedicated private connection can provide more predictable connectivity and avoid relying entirely on the public internet. It still requires appropriate routing, encryption where needed and security controls."
        },
        {
            question: "Which design principle helps a cloud application continue operating when one component fails?",
            answers: ["Single point of failure", "Fault tolerance through redundancy", "Manual-only recovery", "Hard-coded single-instance dependency"],
            correct: 1,
            explanation: "Fault-tolerant designs use redundancy, health checks, failover and recovery mechanisms. The goal is to keep essential services operating despite component failures."
        },
        {
            question: "What is the purpose of a content delivery network (CDN)?",
            answers: ["To cache and deliver content from geographically distributed edge locations", "To replace application databases", "To manage user passwords only", "To compile source code"],
            correct: 0,
            explanation: "A CDN caches content at distributed edge locations closer to users. This reduces latency and can lower load on the origin server."
        },
        {
            question: "A service has an SLA of 99.9% availability. Approximately how much downtime does this allow in a 30-day month?",
            answers: ["About 4.32 minutes", "About 43.2 minutes", "About 7.2 hours", "About 3 days"],
            correct: 1,
            explanation: "A 30-day month has 43,200 minutes. A 0.1% downtime allowance is 43.2 minutes (43,200 × 0.001), assuming the SLA is measured over that month."
        },
        {
            question: "Which approach is most suitable for managing cloud infrastructure through version-controlled configuration files?",
            answers: ["Infrastructure as Code", "Manual console-only configuration", "Ad hoc spreadsheet editing", "Screen recording"],
            correct: 0,
            explanation: "Infrastructure as Code defines infrastructure using machine-readable configuration. It supports repeatable deployments, reviews, version control and automated provisioning."
        },
        {
            question: "What is a major advantage of a multi-cloud strategy?",
            answers: ["It guarantees no outages", "It can reduce dependence on a single cloud provider", "It removes integration complexity", "It eliminates the need for security policies"],
            correct: 1,
            explanation: "Multi-cloud can reduce provider dependency and allow organizations to choose suitable services from multiple vendors. However, it can also increase operational, networking and governance complexity."
        },
        {
            question: "Which mechanism helps protect data stored in a cloud database if the underlying storage media is accessed without authorization?",
            answers: ["Encryption at rest", "Increasing database indexes", "Load balancing", "Auto-scaling"],
            correct: 0,
            explanation: "Encryption at rest protects stored data by making it unreadable without the appropriate cryptographic keys. Strong key management and access controls are also essential."
        },
        {
            question: "A cloud application experiences high latency because every request repeatedly queries the same data. Which technique can reduce repeated database reads?",
            answers: ["Caching", "Increasing DNS TTL to zero", "Disabling monitoring", "Removing all indexes"],
            correct: 0,
            explanation: "Caching stores frequently used data in a faster-access layer, reducing repeated database queries. Cache invalidation, expiration and consistency must be designed carefully."
        }
    ],

    "Parallel and Distributed Systems": [
        {
            question: "A program takes 100 seconds on one processor. If 80% of its execution is parallelizable, what is the theoretical speedup with 4 processors using Amdahl's law?",
            answers: ["1.0", "2.5", "3.2", "4.0"],
            correct: 1,
            explanation: "Amdahl's law gives speedup = 1 / ((1 - P) + P/N). With P = 0.8 and N = 4, speedup = 1 / (0.2 + 0.2) = 2.5."
        },
        {
            question: "Which property ensures that a distributed system continues to provide service despite some component failures?",
            answers: ["Fault tolerance", "Sequential execution", "Code obfuscation", "Static linking"],
            correct: 0,
            explanation: "Fault tolerance is the ability to continue operating, possibly with reduced functionality, when components fail. Replication, failover and recovery mechanisms are commonly used."
        },
        {
            question: "In distributed computing, what is the main purpose of a consensus algorithm?",
            answers: ["To make nodes agree on a value or ordered sequence of decisions", "To increase monitor resolution", "To compress every network packet", "To remove network communication"],
            correct: 0,
            explanation: "Consensus algorithms allow distributed nodes to agree on a decision despite certain failures or delays. They are important for replicated logs, coordination and consistent state management."
        },
        {
            question: "Which statement describes a race condition?",
            answers: ["The result depends on the timing or interleaving of concurrent operations", "A process always executes in alphabetical order", "A program uses too much disk space", "A network packet has a checksum"],
            correct: 0,
            explanation: "A race condition occurs when concurrent operations access shared state and the outcome depends on their execution order. Locks, atomic operations and suitable synchronization can prevent it."
        },
        {
            question: "What is the main purpose of a mutex lock?",
            answers: ["To ensure mutual exclusion when accessing a critical section", "To increase the number of CPU cores", "To route network packets", "To store process output permanently"],
            correct: 0,
            explanation: "A mutex allows only one thread at a time to enter a protected critical section. This helps prevent conflicting updates to shared resources."
        },
        {
            question: "Which condition is necessary for deadlock to occur?",
            answers: ["Mutual exclusion, hold and wait, no preemption, and circular wait", "Only high CPU utilization", "Only a large memory capacity", "Only network latency"],
            correct: 0,
            explanation: "The four Coffman conditions are mutual exclusion, hold and wait, no preemption and circular wait. Deadlock requires all four conditions to hold simultaneously."
        },
        {
            question: "In the message-passing model, how do distributed processes typically exchange information?",
            answers: ["By sending and receiving messages over communication channels", "By directly sharing one physical memory space", "By changing each other's CPU registers", "By using only local variables"],
            correct: 0,
            explanation: "Message passing is a communication model in which processes exchange data through send and receive operations. It is widely used when processes run on separate machines."
        },
        {
            question: "What does the CAP theorem state about a distributed data system during a network partition?",
            answers: ["It must choose between consistency and availability under the partition", "It can always guarantee consistency, availability and partition tolerance simultaneously", "It eliminates network partitions", "It applies only to single-machine databases"],
            correct: 0,
            explanation: "During a network partition, a distributed system cannot guarantee both strong consistency and availability for every request. It must make a trade-off in how it responds while the partition persists."
        },
        {
            question: "Which technique divides a large dataset into smaller partitions distributed across multiple machines?",
            answers: ["Data partitioning or sharding", "Deadlock prevention", "Instruction pipelining", "Register allocation"],
            correct: 0,
            explanation: "Sharding divides data across multiple machines so that storage and query workloads can be distributed. A good partition key helps avoid hotspots and uneven load."
        },
        {
            question: "What is the purpose of load balancing in a distributed system?",
            answers: ["To distribute incoming work across available resources", "To make all servers use the same CPU clock", "To prevent clients from connecting", "To remove the need for monitoring"],
            correct: 0,
            explanation: "Load balancing spreads requests across multiple servers or workers. It can improve throughput, resource utilization and availability when combined with health checks."
        },
        {
            question: "In parallel computing, what is a barrier synchronization operation?",
            answers: ["A point where participating threads wait until all have arrived", "A mechanism that permanently stops every processor", "A method of compressing memory", "A network firewall rule"],
            correct: 0,
            explanation: "A barrier ensures that no participating thread proceeds beyond a synchronization point until all required threads reach it. It is useful between phases of parallel computation."
        },
        {
            question: "Which statement best describes strong scaling?",
            answers: ["Keeping the total problem size fixed while increasing processor count", "Increasing problem size proportionally with processor count", "Keeping processor count fixed while increasing memory", "Reducing the dataset to zero"],
            correct: 0,
            explanation: "Strong scaling measures how execution time changes when a fixed-size problem is distributed across more processors. Communication and synchronization overhead can limit the speedup."
        },
        {
            question: "Which statement best describes weak scaling?",
            answers: ["Keeping work per processor approximately constant as processor count increases", "Keeping total problem size fixed", "Using only one processor", "Removing all communication between nodes"],
            correct: 0,
            explanation: "Weak scaling increases total problem size with processor count so that each processor handles roughly the same amount of work. Ideal weak scaling keeps execution time approximately constant."
        },
        {
            question: "What is the primary role of MPI in high-performance computing?",
            answers: ["Providing a standard message-passing interface between processes", "Managing graphical user interfaces", "Replacing the operating system", "Encrypting all files automatically"],
            correct: 0,
            explanation: "MPI (Message Passing Interface) is a standard library interface for communication among parallel processes. It supports operations such as point-to-point messaging and collective communication."
        },
        {
            question: "A distributed service uses replicated data across nodes. What is eventual consistency?",
            answers: ["Replicas may temporarily differ but converge if updates stop and communication succeeds", "Every read always returns the latest global value", "Replicas can never be updated", "All nodes must share physical memory"],
            correct: 0,
            explanation: "Eventual consistency allows replicas to be temporarily inconsistent. If no new updates occur and communication continues, replicas are expected to converge to the same value."
        },
        {
            question: "Which scheduling strategy assigns tasks to the next available worker to balance variable workloads?",
            answers: ["Dynamic scheduling", "Static scheduling only", "Round-robin memory allocation", "Manual compilation"],
            correct: 0,
            explanation: "Dynamic scheduling assigns work as workers become available. It can improve load balance when task execution times are unpredictable, although scheduling overhead must be considered."
        },
        {
            question: "In a distributed system, what does idempotency mean for an operation?",
            answers: ["Repeating the operation has the same intended effect as performing it once", "The operation must always fail on retry", "The operation can only run on one CPU", "The operation changes its result randomly"],
            correct: 0,
            explanation: "An idempotent operation can be safely repeated without creating additional intended effects. This is valuable when network retries occur after uncertain failures."
        },
        {
            question: "Which technique is commonly used to detect and recover from a failed worker in a distributed processing framework?",
            answers: ["Heartbeats and task re-execution", "Increasing font size", "Removing all logs", "Disabling network communication"],
            correct: 0,
            explanation: "Heartbeats help detect workers that are no longer responding. A coordinator can mark a worker as failed and reassign unfinished tasks, provided the tasks and data are recoverable."
        },
        {
            question: "What is the purpose of a distributed transaction protocol such as two-phase commit?",
            answers: ["To coordinate a transaction across multiple participants", "To speed up graphics rendering", "To replace all network protocols", "To guarantee zero latency"],
            correct: 0,
            explanation: "Two-phase commit coordinates participants through prepare and commit or abort phases. It helps maintain atomicity across participants but can block if the coordinator fails at critical times."
        },
        {
            question: "A parallel program spends most of its time communicating rather than computing. Which issue is most likely limiting performance?",
            answers: ["Communication overhead", "Perfect parallel efficiency", "Insufficient source-code comments", "Excessive screen resolution"],
            correct: 0,
            explanation: "Communication overhead includes data transfer, synchronization and coordination costs. If this overhead dominates computation, adding processors may provide little or no speedup."
        }
    ],

    "Data Science Essentials": [
        {
            question: "A dataset contains a numerical feature measured in thousands and another measured between 0 and 1. Which preprocessing method can place them on comparable scales?",
            answers: ["Feature scaling", "One-hot encoding", "Label deletion", "Data aggregation only"],
            correct: 0,
            explanation: "Feature scaling transforms numerical features to comparable ranges. Standardization or min-max scaling can prevent large-valued features from dominating distance-based algorithms."
        },
        {
            question: "For a highly skewed numerical variable containing extreme outliers, which measure is generally more robust for describing central tendency?",
            answers: ["Mean", "Median", "Maximum", "Variance"],
            correct: 1,
            explanation: "The median depends on the middle observation rather than the magnitude of every value. It is less sensitive than the mean to extreme outliers and skewed distributions."
        },
        {
            question: "Which pandas operation is commonly used to combine rows from two tables based on a shared key?",
            answers: ["merge()", "reshape()", "describe()", "astype()"],
            correct: 0,
            explanation: "Pandas merge() performs database-style joins using one or more common columns or indexes. The join type determines which matching and non-matching rows are retained."
        },
        {
            question: "A dataset has 12 missing values in a feature with 10,000 records. What should be considered before imputing them?",
            answers: ["The missingness mechanism and feature meaning", "Always replace them with zero", "Delete the entire dataset", "Convert every value to a string"],
            correct: 0,
            explanation: "Missing data may be missing completely at random, at random conditional on observed data, or not at random. Understanding the mechanism and feature meaning helps select a defensible imputation strategy."
        },
        {
            question: "Which visualization is most suitable for examining the relationship between two continuous numerical variables?",
            answers: ["Scatter plot", "Pie chart", "Word cloud", "Stacked text table"],
            correct: 0,
            explanation: "A scatter plot displays paired numerical observations and helps reveal correlation, clusters, non-linear patterns and outliers."
        },
        {
            question: "In exploratory data analysis, what does an interquartile range (IQR) represent?",
            answers: ["The difference between the 75th and 25th percentiles", "The difference between maximum and minimum only", "The arithmetic mean", "The number of missing records"],
            correct: 0,
            explanation: "IQR = Q3 - Q1 and measures the spread of the middle 50% of observations. It is relatively robust to extreme values and is used in common box-plot outlier rules."
        },
        {
            question: "A dataset has 1,000 records, of which 200 belong to class A. What is the proportion of class A?",
            answers: ["2%", "20%", "50%", "80%"],
            correct: 1,
            explanation: "The class proportion is 200 / 1,000 = 0.2, or 20%. Class proportions are useful for understanding imbalance before model training."
        },
        {
            question: "Why should a test dataset generally remain separate until final model evaluation?",
            answers: ["To obtain an unbiased estimate on data not used for model selection", "To increase training accuracy", "To make all features identical", "To remove the target variable permanently"],
            correct: 0,
            explanation: "Repeatedly tuning a model against the test set leaks information from that set into the development process. Keeping it untouched provides a more credible estimate of generalization."
        },
        {
            question: "Which statistic measures the strength and direction of a linear relationship between two numerical variables?",
            answers: ["Pearson correlation coefficient", "Mode", "Interquartile range", "Frequency count"],
            correct: 0,
            explanation: "Pearson's correlation coefficient ranges from -1 to +1 and measures linear association. Correlation does not by itself establish causation and can be affected by outliers."
        },
        {
            question: "A feature has a long right tail. Which transformation is often considered to reduce positive skewness?",
            answers: ["Log transformation", "Adding random noise", "Sorting rows alphabetically", "Replacing all values with labels"],
            correct: 0,
            explanation: "A logarithmic transformation compresses large positive values more strongly than small ones. It can reduce right skewness, but requires appropriate handling of zero and negative values."
        },
        {
            question: "What is the primary purpose of Principal Component Analysis (PCA)?",
            answers: ["To project data into fewer orthogonal directions capturing maximum variance", "To guarantee perfect classification", "To create missing target labels", "To sort data by date"],
            correct: 0,
            explanation: "PCA transforms correlated features into orthogonal principal components ordered by explained variance. It is often used for dimensionality reduction, visualization and noise reduction."
        },
        {
            question: "Why is standardization often performed before PCA?",
            answers: ["To prevent features with larger measurement scales from dominating variance", "To make every feature binary", "To remove all correlations automatically", "To increase the number of observations"],
            correct: 0,
            explanation: "PCA is variance-based, so features with large numeric scales can dominate the components. Standardization gives features comparable scale when that is appropriate for the data."
        },
        {
            question: "Which sampling method gives every population member an equal chance of selection?",
            answers: ["Simple random sampling", "Convenience sampling", "Judgment sampling", "Quota sampling only"],
            correct: 0,
            explanation: "Simple random sampling selects individuals randomly from the population, giving each an equal selection probability. It can reduce selection bias when a suitable sampling frame is available."
        },
        {
            question: "A box plot shows one observation far beyond the upper whisker. What is the most appropriate interpretation?",
            answers: ["It is a potential outlier requiring investigation", "It must always be deleted", "It proves the dataset is invalid", "It is necessarily a data-entry error"],
            correct: 0,
            explanation: "A point beyond the whisker is flagged as a potential outlier under the box-plot rule. It may be a valid rare observation, measurement error or a data-quality issue, so it should be investigated."
        },
        {
            question: "Which SQL clause filters grouped results after aggregation?",
            answers: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
            correct: 1,
            explanation: "HAVING filters groups after GROUP BY and aggregation. WHERE filters individual rows before grouping."
        },
        {
            question: "A dataset contains duplicate customer records. Which data preparation step should be performed?",
            answers: ["Identify and resolve duplicate records using appropriate keys", "Normalize every column to uppercase", "Delete all numerical columns", "Apply PCA before checking data quality"],
            correct: 0,
            explanation: "Duplicate records can distort counts, summary statistics and model training. They should be identified using appropriate business keys and resolved according to the meaning of the records."
        },
        {
            question: "What is the main difference between correlation and causation?",
            answers: ["Correlation measures association; causation means one variable produces a change in another", "They always mean exactly the same thing", "Causation is calculated only using a pie chart", "Correlation proves a causal mechanism"],
            correct: 0,
            explanation: "Correlation describes how variables vary together, while causation involves a cause-and-effect relationship. Confounding variables and reverse causality can create misleading associations."
        },
        {
            question: "Which method is appropriate for estimating the generalization performance of a model when data is limited?",
            answers: ["K-fold cross-validation", "Evaluating only on training data", "Removing all validation data", "Selecting the best result from the test set repeatedly"],
            correct: 0,
            explanation: "K-fold cross-validation divides data into K parts and rotates the validation fold. It provides multiple estimates of performance while allowing each observation to be used for validation."
        },
        {
            question: "A company wants to summarize monthly sales by product category. Which operation is most appropriate?",
            answers: ["Group by category and month, then aggregate sales", "Apply image segmentation", "Use a hash function on every row", "Delete the date column before analysis"],
            correct: 0,
            explanation: "Grouping by product category and month followed by aggregation, such as sum, produces the required summary. This is a standard data-analysis workflow in SQL or pandas."
        },
        {
            question: "What is data leakage in a data science workflow?",
            answers: ["Using information during training that would not legitimately be available at prediction time", "Storing data in a CSV file", "Converting dates into month values", "Visualizing a distribution"],
            correct: 0,
            explanation: "Data leakage introduces information that would not be available in real deployment, often through preprocessing before splitting or features derived from future outcomes. It can make evaluation metrics misleadingly optimistic."
        }
    ],

    "ML": [
        {
            question: "A model predicts house prices from labelled historical examples. Which type of machine learning task is this?",
            answers: ["Unsupervised clustering", "Supervised regression", "Reinforcement learning", "Association rule mining"],
            correct: 1,
            explanation: "House price is a continuous numerical target, and historical examples provide input features with known prices. This makes the task supervised regression."
        },
        {
            question: "Which loss function is commonly used for binary classification with a predicted probability?",
            answers: ["Binary cross-entropy", "Euclidean distance between images only", "Silhouette score", "Mean absolute deviation of input features"],
            correct: 0,
            explanation: "Binary cross-entropy measures the difference between true binary labels and predicted probabilities. It strongly penalizes confident predictions that are incorrect."
        },
        {
            question: "In gradient descent, what happens if the learning rate is excessively large?",
            answers: ["The optimization may overshoot the minimum and diverge", "The model is guaranteed to converge faster", "All gradients become zero", "The training labels are automatically corrected"],
            correct: 0,
            explanation: "A very large learning rate can cause updates to jump across the minimum repeatedly or move away from it. A suitable learning rate is important for stable convergence."
        },
        {
            question: "Which regularization method adds the sum of absolute coefficient values to the loss function?",
            answers: ["L1 regularization", "L2 regularization", "Dropout only", "Batch normalization"],
            correct: 0,
            explanation: "L1 regularization adds a penalty proportional to the absolute coefficient values. It can drive some coefficients exactly to zero, producing sparse models."
        },
        {
            question: "Which regularization method penalizes the sum of squared model coefficients?",
            answers: ["L1", "L2", "One-hot encoding", "Oversampling"],
            correct: 1,
            explanation: "L2 regularization adds a squared-coefficient penalty to the objective. It discourages very large weights and can improve generalization without usually forcing weights exactly to zero."
        },
        {
            question: "Which algorithm is particularly sensitive to feature scaling because it relies on distance calculations?",
            answers: ["K-Nearest Neighbors", "Decision Tree", "Random Forest", "Rule-based classifier"],
            correct: 0,
            explanation: "KNN selects neighbors using a distance measure. Features with large numeric ranges can dominate the distance, so scaling is often important."
        },
        {
            question: "In K-Means clustering, what does the parameter K represent?",
            answers: ["Number of clusters", "Number of input features", "Number of training epochs", "Number of target classes in every supervised dataset"],
            correct: 0,
            explanation: "K specifies the number of clusters to form. K-Means iteratively assigns observations to the nearest centroid and updates centroids to minimize within-cluster squared distances."
        },
        {
            question: "Which metric is most appropriate when false negatives are especially costly?",
            answers: ["Recall", "Specificity only", "Training accuracy only", "Mean squared error"],
            correct: 0,
            explanation: "Recall measures the proportion of actual positive cases detected. When missing a positive case is costly, recall is an important metric, though precision and the operational threshold should also be considered."
        },
        {
            question: "What is the purpose of a validation set during model development?",
            answers: ["To tune hyperparameters and compare candidate models", "To replace the training set entirely", "To guarantee perfect predictions", "To store the final deployment credentials"],
            correct: 0,
            explanation: "The validation set provides feedback during model selection and hyperparameter tuning. The test set should remain separate for final evaluation."
        },
        {
            question: "A model has high training error and high validation error. What is the likely diagnosis?",
            answers: ["Underfitting", "Overfitting", "Data leakage", "Perfect fit"],
            correct: 0,
            explanation: "High error on both training and validation data suggests the model is not capturing the underlying pattern. It may be too simple, poorly configured or inadequately trained."
        },
        {
            question: "Which ensemble method trains multiple decision trees on bootstrapped samples and combines their predictions?",
            answers: ["Random Forest", "Single Linear Regression", "K-Means", "Principal Component Analysis"],
            correct: 0,
            explanation: "Random Forest trains many decision trees using bootstrap samples and random feature subsets. Aggregating their predictions generally reduces variance compared with a single unstable tree."
        },
        {
            question: "What is the key idea behind boosting algorithms?",
            answers: ["Train learners sequentially so later learners focus on errors or residuals from earlier learners", "Train one model and never update it", "Remove all difficult observations", "Use no training labels"],
            correct: 0,
            explanation: "Boosting builds an ensemble in stages. Each new learner focuses on correcting errors or residual patterns from previous learners, combining them into a stronger predictor."
        },
        {
            question: "Which method is commonly used to reduce dimensionality while preserving directions of high variance?",
            answers: ["PCA", "KNN", "Naive Bayes", "Grid search"],
            correct: 0,
            explanation: "Principal Component Analysis finds orthogonal directions that capture the greatest variance in the data. It can reduce feature dimensionality, although high variance does not always mean high predictive value."
        },
        {
            question: "In a support vector machine, what is the margin?",
            answers: ["The distance between the separating decision boundary and the closest training points", "The number of missing values", "The total number of classes only", "The training duration"],
            correct: 0,
            explanation: "The margin is the distance from the decision boundary to the nearest points of each class. SVMs aim to find a boundary with a large margin, which can improve generalization."
        },
        {
            question: "Which kernel enables an SVM to model non-linear decision boundaries by implicitly mapping data into a higher-dimensional feature space?",
            answers: ["RBF kernel", "Identity-only kernel", "Sorting kernel", "CSV kernel"],
            correct: 0,
            explanation: "The Radial Basis Function kernel computes similarity based on distance and can represent non-linear boundaries. Its performance depends on suitable hyperparameter selection."
        },
        {
            question: "What is the main assumption of the Naive Bayes classifier?",
            answers: ["Features are conditionally independent given the class", "All features must have identical values", "The dataset must contain no labels", "Every class must have equal frequency"],
            correct: 0,
            explanation: "Naive Bayes assumes conditional independence of features given the class. This simplifying assumption is often unrealistic but can still produce effective classifiers."
        },
        {
            question: "A model's predicted probabilities are consistently too high compared with observed event frequencies. Which property needs improvement?",
            answers: ["Probability calibration", "Feature indexing", "Data compression", "Clustering density"],
            correct: 0,
            explanation: "A calibrated model's predicted probabilities correspond to observed frequencies over groups of predictions. Calibration methods such as Platt scaling or isotonic regression can help."
        },
        {
            question: "Why is stratified sampling useful when splitting an imbalanced classification dataset?",
            answers: ["It preserves approximately the same class proportions in each split", "It removes all minority examples", "It guarantees identical predictions", "It makes every feature normally distributed"],
            correct: 0,
            explanation: "Stratification maintains similar class proportions across training and test subsets. This helps ensure that minority classes are represented in each split."
        },
        {
            question: "What does the ROC curve plot?",
            answers: ["True positive rate against false positive rate at different thresholds", "Precision against recall only", "Training loss against epoch number", "Feature count against memory size"],
            correct: 0,
            explanation: "The receiver operating characteristic curve plots sensitivity (true positive rate) against false positive rate across thresholds. The area under the curve summarizes ranking discrimination across thresholds."
        },
        {
            question: "A model performs well on training data but poorly on unseen data. Which approach can help control this problem?",
            answers: ["Use regularization and cross-validation", "Increase model complexity without evaluation", "Train repeatedly on the test set", "Remove the validation process"],
            correct: 0,
            explanation: "Regularization limits excessive model complexity, while cross-validation helps assess generalization during model selection. More data, simpler models and suitable feature selection may also help reduce overfitting."
        }
    ]
};

// QuizHub JavaScript

let selectedSubject = "";
let currentQuestion = 0;
let score = 0;
let answered = false;

// HTML elements
const homeSection = document.getElementById("home");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");

const subjectTitle = document.getElementById("subject-title");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const feedbackElement = document.getElementById("feedback");

const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");

const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const historyList = document.getElementById("history-list");

// Open selected subject
document.querySelectorAll(".subject-btn").forEach(button => {
    button.addEventListener("click", () => {
        selectedSubject = button.dataset.subject;

        if (!questionBank[selectedSubject]) {
            alert("Questions not found for this subject!");
            return;
        }

        currentQuestion = 0;
        score = 0;

        homeSection.hidden = true;
        resultSection.hidden = true;
        quizSection.hidden = false;

        subjectTitle.textContent = selectedSubject + " Quiz";

        showQuestion();
    });
});

// Display question
function showQuestion() {
    const questions = questionBank[selectedSubject];
    const q = questions[currentQuestion];

    answered = false;

    questionElement.textContent = q.question;

    progressElement.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    answersElement.innerHTML = "";
    feedbackElement.hidden = true;

    nextButton.disabled = true;

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";
        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answersElement.appendChild(button);
    });
}

// Check answer
function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const q = questionBank[selectedSubject][currentQuestion];
    const correctIndex = q.correct;

    const buttons =
        answersElement.querySelectorAll(".answer-btn");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== correctIndex) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;

        feedbackElement.innerHTML =
            "<strong>Correct answer! +1 mark</strong><br>" +
            q.explanation;
    } else {
        feedbackElement.innerHTML =
            "<strong>Incorrect answer.</strong><br>" +
            "Correct answer: " +
            q.answers[correctIndex] +
            "<br>" + q.explanation;
    }

    feedbackElement.hidden = false;
    nextButton.disabled = false;
}

// Next question
nextButton.addEventListener("click", () => {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < questionBank[selectedSubject].length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Show final result
function showResult() {
    quizSection.hidden = true;
    resultSection.hidden = false;

    const total = questionBank[selectedSubject].length;
    const percentage = Math.round((score / total) * 100);

    scoreElement.textContent = score + " / " + total;
    percentageElement.textContent = percentage + "%";

    saveHistory();
}

// Save result in browser
function saveHistory() {
    const history = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
    );

    history.unshift({
        subject: selectedSubject,
        score: score,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "quizHistory",
        JSON.stringify(history.slice(0, 10))
    );

    displayHistory();
}

// Display history
function displayHistory() {
    const history = JSON.parse(
        localStorage.getItem("quizHistory") || "[]"
    );

    historyList.innerHTML = "";

    if (history.length === 0) {
        historyList.textContent = "No quiz history yet.";
        return;
    }

    history.forEach(item => {
        const div = document.createElement("div");

        div.className = "history-item";

        div.textContent =
            item.subject + " | " +
            item.score + "/20 | " +
            item.date;

        historyList.appendChild(div);
    });
}

// Return home
homeButton.addEventListener("click", () => {
    resultSection.hidden = true;
    quizSection.hidden = true;
    homeSection.hidden = false;
});

// Back to home button (if present)
const quitButton = document.getElementById("quit-btn");

if (quitButton) {
    quitButton.addEventListener("click", () => {
        quizSection.hidden = true;
        homeSection.hidden = false;
    });
}

// Clear history (if present)
const clearButton = document.getElementById("clear-history");

if (clearButton) {
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("quizHistory");
        displayHistory();
    });
}

displayHistory();
