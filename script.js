document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('applicationForm');

    const setError = (id, message) => {
        const group = document.getElementById(`group-${id}`);
        group.classList.add('invalid');
        if (message) {
            group.querySelector('.error-msg').innerText = message;
        }
    };

    const clearError = (id) => {
        const group = document.getElementById(`group-${id}`);
        group.classList.remove('invalid');
    };

    const isEmailValid = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
        let isValid = true;

        // Validating Full Name
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName === '') {
            setError('name', 'Please enter your full name.');
            isValid = false;
        } else {
            clearError('name');
        }

        // Validating Email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            setError('email', 'Please enter your email address.');
            isValid = false;
        } else if (!isEmailValid(email)) {
            setError('email', 'Please enter a valid email address.');
            isValid = false;
        } else {
            clearError('email');
        }

        // Validating Phone Number
        const phone = document.getElementById('phone').value.trim();
        if (phone === '') {
            setError('phone', 'Please enter your phone number.');
            isValid = false;
        } else if (phone.length < 7) {
            setError('phone', 'Please enter a valid phone number.');
            isValid = false;
        } else {
            clearError('phone');
        }

        // Validating Experience
        const experience = document.getElementById('experience').value.trim();
        if (experience === '') {
            setError('experience', 'Please provide a brief description of your experience.');
            isValid = false;
        } else {
            clearError('experience');
        }

        if (isValid) {
            // Simulate form submission
            const btn = document.querySelector('.btn-submit');
            btn.innerText = 'Submitting...';
            btn.disabled = true;
            btn.style.opacity = '0.7';
            btn.style.cursor = 'not-allowed';

            // Redirect to success page after a short delay
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 800);
        }
        });
    }

    // Instant validation clearance on input
    const inputs = ['fullName', 'email', 'phone', 'experience'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const groupId = id === 'fullName' ? 'name' : id;
            el.addEventListener('input', () => {
                clearError(groupId);
            });
        }
    });

    // Comment Form Logic
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('commentName').value.trim();
            const text = document.getElementById('commentText').value.trim();
            
            if (name && text) {
                const commentsList = document.getElementById('commentsList');
                
                const newComment = document.createElement('div');
                newComment.className = 'comment-item card';
                newComment.style.padding = '1.5rem';
                newComment.style.textAlign = 'left';
                newComment.innerHTML = `
                    <strong style="color: var(--primary); display: block; margin-bottom: 0.5rem; font-size: 1.1rem;">${name}</strong>
                    <p style="color: var(--text-light); font-size: 1rem; margin: 0;">${text}</p>
                `;
                
                // Add to top of list
                commentsList.insertBefore(newComment, commentsList.firstChild);
                
                // Reset form
                commentForm.reset();
            }
        });
    }
});
