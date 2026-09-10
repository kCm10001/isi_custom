// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Profit and Loss Statement ISI"] = $.extend({}, erpnext.financial_statements);

erpnext.utils.add_dimensions("Profit and Loss Statement ISI", 10);

frappe.query_reports["Profit and Loss Statement ISI"]["filters"].push({
	fieldname: "selected_view",
	label: __("Select View"),
	fieldtype: "Select",
	options: [
		{ value: "Report", label: __("Report View") },
		{ value: "Growth", label: __("Growth View") },
		{ value: "Margin", label: __("Margin View") },
	],
	default: "Report",
	reqd: 1,
});

frappe.query_reports["Profit and Loss Statement ISI"]["filters"].push({
	fieldname: "accumulated_values",
	label: __("Accumulated Values"),
	fieldtype: "Check",
	default: 1,
});
