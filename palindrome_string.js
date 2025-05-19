function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');
    // Compare original and reversed strings
    return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama"));