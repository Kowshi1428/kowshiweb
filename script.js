// JavaScript with let, const, and functions as required

// Global variables using let and const
const colorOptions = [
    'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)'
];

let currentColorIndex = 0;
let currentTextColor = '#333';

const textColors = ['#333', '#e74c3c', '#3498db', '#27ae60', '#8e44ad', '#f39c12'];
let currentTextColorIndex = 0;

// Function to change background as required
function changeBackground() {
    currentColorIndex = (currentColorIndex + 1) % colorOptions.length;
    const newBackground = colorOptions[currentColorIndex];
    
    // Using document.body.style as required
    document.body.style.background = newBackground;
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientBG 15s ease infinite';
    
    console.log('Background changed to:', newBackground);
}

// Function to change text color when button is clicked
function changeTextColor() {
    currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
    currentTextColor = textColors[currentTextColorIndex];
    
    // Change text color of main elements
    const elements = document.querySelectorAll('h1, h2, h3, p, td, th, li');
    elements.forEach(element => {
        element.style.color = currentTextColor;
    });
    
    console.log('Text color changed to:', currentTextColor);
}

// Function to append content dynamically
function appendContent() {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = `
        <p>Dynamic content added at ${new Date().toLocaleTimeString()}</p>
    `;
    document.body.appendChild(contentDiv);
    
    console.log('Content appended to page');
}

// Event listeners and DOM manipulation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kowshhhi website loaded successfully!');
    
    // Log initial page load
    const pageLoadInfo = {
        page: document.title,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    console.log('Page Load Info:', pageLoadInfo);
    
    // Add click tracking to navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigation clicked:', {
                link: this.textContent,
                href: this.href,
                timestamp: new Date().toISOString()
            });
        });
    });
});

// Additional utility functions
function logUserInteraction(action, details = {}) {
    const interaction = {
        action: action,
        details: details,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
    };
    
    console.log('User Interaction:', interaction);
}

// Function to demonstrate variable types and operators
function demonstrateJSFeatures() {
    // Using const for constants
    const websiteName = "Kowshhhi";
    const currentYear = 2024;
    
    // Using let for variables that change
    let userCount = 1000;
    let isActive = true;
    
    // Arithmetic operators
    const totalUsers = userCount + 500;
    const averageUsersPerDay = totalUsers / 30;
    
    // Comparison operators
    const isLargeUserBase = totalUsers > 1000;
    const isNewWebsite = currentYear >= 2024;
    
    // Logical operators
    const isSuccessful = isLargeUserBase && isActive;
    const needsPromotion = !isLargeUserBase || !isActive;
    
    // Output to console as required
    console.log('=== Kowshhhi Analytics ===');
    console.log(`Website: ${websiteName}`);
    console.log(`Current Year: ${currentYear}`);
    console.log(`Total Users: ${totalUsers}`);
    console.log(`Average Users/Day: ${averageUsersPerDay.toFixed(2)}`);
    console.log(`Large User Base: ${isLargeUserBase}`);
    console.log(`New Website: ${isNewWebsite}`);
    console.log(`Is Successful: ${isSuccessful}`);
    console.log(`Needs Promotion: ${needsPromotion}`);
    
    return {
        websiteName,
        totalUsers,
        averageUsersPerDay,
        isSuccessful,
        needsPromotion
    };
}

// Call the demonstration function
demonstrateJSFeatures();
