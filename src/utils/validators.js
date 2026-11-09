export function validateCase(form) {
    const errors = {}
    if (!form.complaint.trim()) errors.complaint = 'Please describe the patient presentation.'
    return errors
  }
  