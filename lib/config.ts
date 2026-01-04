/**
 * Site-wide configuration
 * 
 * All hardcoded values should be defined here and imported where needed.
 * This ensures consistency and makes updates easier.
 */

export const siteConfig = {
    // Basic info
    name: 'QMML',
    fullName: 'Queen Mary Machine Learning Society',
    email: 'qmmml@qmsu.org',
    location: '327 Mile End Rd, London E1 4NS',

    // Brand colors
    colors: {
        primary: '#FCA311',
        accent: '#FF6B00',
        blue: '#007FFF',
    },

    // Navigation links (used in Navbar and Footer)
    navigation: [
        { label: 'Home', href: '/' },
        { label: 'What We Do', href: '/what-we-do' },
        { label: 'Our Team', href: '/our-team' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Get in Touch', href: '/contact' },
    ],

    // Program pages
    programs: [
        { label: 'AI/ML Education', href: '/education' },
        { label: 'AI/ML Competitions', href: '/competitions' },
        { label: 'AI/ML Events', href: '/events' },
    ],

    // Social media links (single source of truth)
    social: {
        github: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML',
        linkedin: 'https://www.linkedin.com/company/qmml/',
        instagram: 'https://www.instagram.com/qmmachinelearning/',
        whatsapp: 'https://chat.whatsapp.com/IUd7RmiD5OD6cDbJ76iQHO',
    },

    // External links
    joinUrl: 'https://www.qmsu.org/groups/qmml/',

    // AI/ML Lectures (12 lectures)
    lectures: [
        {
            id: 1,
            title: 'Gradient Descent & Optimization',
            description: 'Introduction to optimization algorithms and gradient descent fundamentals for machine learning.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_01',
        },
        {
            id: 2,
            title: 'Simple Linear Regression',
            description: 'Supervised learning basics and simple linear regression implementation with derivatives.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_02',
        },
        {
            id: 3,
            title: 'Multiple Linear Regression',
            description: 'Feature scaling, model evaluation with MSC and R², and intro to overfitting/underfitting.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_03',
        },
        {
            id: 4,
            title: 'Neural Networks: Forward Pass',
            description: 'Neural network architecture, activation functions (ReLU), and forward propagation.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_04',
        },
        {
            id: 5,
            title: 'Neural Networks: Backpropagation',
            description: 'Backpropagation from scratch with hands-on PyTorch and TensorFlow implementation.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_05',
        },
        {
            id: 6,
            title: 'Multiclass Classification',
            description: 'Neural network classification in PyTorch, softmax activation, and cross-entropy loss.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_06',
        },
        {
            id: 7,
            title: 'Convolutional Neural Networks',
            description: 'CNN architecture from LeNet to ResNet, image classification, and training strategies.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_07',
        },
        {
            id: 8,
            title: 'RNNs & LSTMs',
            description: 'Recurrent networks, LSTM architecture, and sequence modeling for NLP and time-series.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_08',
        },
        {
            id: 9,
            title: 'RL: Epsilon Greedy & K-Arm Bandit',
            description: 'Introduction to reinforcement learning through the K-armed bandit problem and exploration strategies.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_09',
        },
        {
            id: 10,
            title: 'RL: Q-Learning',
            description: 'Understanding Q-learning algorithm, Bellman equations, and exploration vs exploitation.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_10',
        },
        {
            id: 11,
            title: 'RL: Policy Gradient',
            description: 'Policy gradient methods, REINFORCE algorithm, and policy optimization techniques.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_11',
        },
        {
            id: 12,
            title: 'RL: Deep Q-Networks',
            description: 'DQN architecture, experience replay, target networks, and deep reinforcement learning.',
            githubUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/tree/main/2024-2025/Lectures/lecture_12',
        },
    ],

    // Kaggle Competition Workshops (14 sessions)
    kaggleWorkshops: [
        {
            id: 1,
            title: 'Getting Started with Kaggle',
            description: 'Platform introduction, competition structure, and submission workflow basics.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/01_kaggle_seasons.pdf',
        },
        {
            id: 2,
            title: 'Exploratory Data Analysis',
            description: 'Data exploration techniques, visualization best practices, and understanding datasets.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/02_kaggle_seasons.pdf',
        },
        {
            id: 3,
            title: 'Feature Engineering Basics',
            description: 'Creating meaningful features, data transformation techniques, and preprocessing.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/03_kaggle_seasons.pdf',
        },
        {
            id: 4,
            title: 'Model Selection',
            description: 'Choosing the right algorithms, building baseline models, and evaluation metrics.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/04_kaggle_seasons.pdf',
        },
        {
            id: 5,
            title: 'Cross-Validation Strategies',
            description: 'K-fold validation, stratified CV, and avoiding data leakage in competitions.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/05_kaggle_seasons.pdf',
        },
        {
            id: 6,
            title: 'Hyperparameter Tuning',
            description: 'Grid search, random search, and advanced optimization with Optuna/Hyperopt.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/06_kaggle_seasons.pdf',
        },
        {
            id: 7,
            title: 'Ensemble Methods',
            description: 'Bagging, boosting, stacking strategies, and building winning ensembles.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/07_kaggle_seasons.pdf',
        },
        {
            id: 8,
            title: 'Gradient Boosting Deep Dive',
            description: 'XGBoost, LightGBM, CatBoost comparison and best practices for tabular data.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/08_kaggle_seasons.pdf',
        },
        {
            id: 9,
            title: 'Handling Imbalanced Data',
            description: 'SMOTE, class weights, threshold tuning, and strategies for imbalanced datasets.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/09_kaggle_seasons.pdf',
        },
        {
            id: 10,
            title: 'Time Series Competitions',
            description: 'Temporal features, lag variables, and forecasting techniques for Kaggle.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/10_kaggle_seasons.pdf',
        },
        {
            id: 11,
            title: 'NLP Competitions',
            description: 'Text preprocessing, TF-IDF, word embeddings, and transformer models.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/11_kaggle_seasons.pdf',
        },
        {
            id: 12,
            title: 'Computer Vision Basics',
            description: 'Image augmentation, transfer learning, and CNN architectures for competitions.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/12-Kaggle-Seasons.pdf',
        },
        {
            id: 13,
            title: 'Advanced Feature Engineering',
            description: 'Target encoding, feature selection, and advanced preprocessing techniques.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/13_Kaggle_Seasons.pdf',
        },
        {
            id: 14,
            title: 'Final Competition Strategy',
            description: 'End-to-end workflow, leaderboard strategy, and tips for top placements.',
            pdfUrl: 'https://github.com/Queen-Mary-Machine-Learning-Society/QMML/blob/main/2024-2025/competitions/kaggle_seasons/weekly_session_slides/14_kaggle_seasons.pdf',
        },
    ],
} as const;

// Type exports
export type NavItem = typeof siteConfig.navigation[number];
export type ProgramItem = typeof siteConfig.programs[number];
export type Lecture = typeof siteConfig.lectures[number];
export type KaggleWorkshop = typeof siteConfig.kaggleWorkshops[number];

