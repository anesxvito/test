// Your JavaScript code
function handleClick() {
    const output = document.getElementById('output');
    const messages = [
        'Hello from JavaScript!',
        'This is working great!',
        'You clicked the button!',
        'Keep coding!',
        'This IDE is awesome!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    output.innerHTML = '<p style="color: #667eea; margin: 0;"><strong>' + randomMessage + '</strong></p><small style="color: #666;">Clicked at: ' + new Date().toLocaleTimeString() + '</small>';
}

// Auto-run when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Project loaded successfully!');
});