from django.shortcuts import render
from .forms import ContactForm

def contact_form(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Здесь можно обработать данные формы (например, отправить письмо).
            return render(request, 'contacts/thank_you.html')
    return render(request, 'contacts/contact_form.html', {'form': form})
