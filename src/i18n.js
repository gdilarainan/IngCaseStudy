// src/i18n.js

export const translations = {
	en: {
		title: 'Employee List',
		employees: 'Employees',
		addNew: 'Add new',
		id: 'ID',
		firstName: 'First Name',
		lastName: 'Last Name',
		department: 'Department',
		position: 'Position',
		dateOfEmployment: 'Date of Employment',
		dateOfBirth: 'Date of Birth',
		phoneNumber: 'Phone Number',
		email: 'Email Address',
		actions: 'Actions',
		edit: 'Edit',
		delete: 'Delete',
		addEmployee: 'Add Employee',
		editEmployee: 'Edit Employee',
		add: 'Add',
		update: 'Update',
		cancel: 'Cancel',
		confirmDelete: 'Are you sure you want to delete this employee?'
	},
	tr: {
		title: 'Çalışan Listesi',
		employees: 'Çalisanlar',
		addNew: 'Yeni ekle',
		id: 'ID',
		firstName: 'İsim',
		lastName: 'Soyisim',
		department: 'Departman',
		position: 'Pozisyon',
		dateOfEmployment: 'İşe Giriş Tarihi',
		dateOfBirth: 'Doğum Tarihi',
		phoneNumber: 'Telefon Numarası',
		email: 'E-posta Adresi',
		actions: 'İşlemler',
		edit: 'Düzenle',
		delete: 'Sil',
		addEmployee: 'Çalışan Ekle',
		editEmployee: 'Çalışanı Düzenle',
		add: 'Ekle',
		update: 'Güncelle',
		cancel: 'İptal',
		confirmDelete: 'Bu çalışanı silmek istediğinizden emin misiniz?'
	}
};

export const getTranslations = (lang = 'en') => {
	return translations[lang] || translations['en'];
};
