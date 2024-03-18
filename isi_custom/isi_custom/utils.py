def add_scor(doc,event):
	from erpnextswiss.erpnextswiss.common_functions import get_scor_reference
	referenzteil = doc.name.split('-')[0]
	scor_ref = get_scor_reference(referenzteil)
	doc.esr_reference = scor_ref
	doc.save(ignore_permissions=True)
