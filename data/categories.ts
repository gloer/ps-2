export type ChemicalElement = {
  symbol: string;
  name: string;
  atomic_number: number;
  group: number;
  period: number;
};

export type Category = {
  name: string;
  class_name: string;
  color: string;
  hover_color: string;
  elements: ChemicalElement[];
};

export const categories: Category[] = [
    {
        "name": "Alkali Metals",
		"class_name" : "alkali_metals",
        "color": "peachpuff",
        "hover_color": "lightsalmon",
        "elements": [            
            { "symbol": "Li", "name": "Lithium", "atomic_number": 3, "group": 1, "period": 2 },
            { "symbol": "Na", "name": "Sodium", "atomic_number": 11, "group": 1, "period": 3 },
            { "symbol": "K", "name": "Potassium", "atomic_number": 19, "group": 1, "period": 4 },
            { "symbol": "Rb", "name": "Rubidium", "atomic_number": 37, "group": 1, "period": 5 },
            { "symbol": "Cs", "name": "Cesium", "atomic_number": 55, "group": 1, "period": 6 },
            { "symbol": "Fr", "name": "Francium", "atomic_number": 87, "group": 1, "period": 7 }
        ]
    },
    {
        "name": "Alkaline Earth Metals",
		"class_name" : "alkali_earth_metals",
        "color": "lightgoldenrodyellow",
        "hover_color": "khaki",
        "elements": [
            { "symbol": "Be", "name": "Beryllium", "atomic_number": 4, "group": 2, "period": 2 },
            { "symbol": "Mg", "name": "Magnesium", "atomic_number": 12, "group": 2, "period": 3 },
            { "symbol": "Ca", "name": "Calcium", "atomic_number": 20, "group": 2, "period": 4 },
            { "symbol": "Sr", "name": "Strontium", "atomic_number": 38, "group": 2, "period": 5 },
            { "symbol": "Ba", "name": "Barium", "atomic_number": 56, "group": 2, "period": 6 },
            { "symbol": "Ra", "name": "Radium", "atomic_number": 88, "group": 2, "period": 7 }
        ]
    },
    {
        "name": "Noble Gases",
		"class_name" : "noble_gasses",
        "color": "lightblue",
        "hover_color": "deepskyblue",
        "elements": [
            { "symbol": "He", "name": "Helium", "atomic_number": 2, "group": 18, "period": 1 },
            { "symbol": "Ne", "name": "Neon", "atomic_number": 10, "group": 18, "period": 2 },
            { "symbol": "Ar", "name": "Argon", "atomic_number": 18, "group": 18, "period": 3 },
            { "symbol": "Kr", "name": "Krypton", "atomic_number": 36, "group": 18, "period": 4 },
            { "symbol": "Xe", "name": "Xenon", "atomic_number": 54, "group": 18, "period": 5 },
            { "symbol": "Rn", "name": "Radon", "atomic_number": 86, "group": 18, "period": 6 },            
        ]
    },
    {
        "name": "Transition Metals",
		"class_name" : "transition_metals",
        "color": "ghostwhite",
        "hover_color": "indianred",
        "elements": [
        { "symbol": "Sc", "name": "Scandium", "atomic_number": 21, "group": 3, "period": 4 },
        { "symbol": "Ti", "name": "Titanium", "atomic_number": 22, "group": 4, "period": 4 },
        { "symbol": "V", "name": "Vanadium", "atomic_number": 23, "group": 5, "period": 4 },
        { "symbol": "Cr", "name": "Chromium", "atomic_number": 24, "group": 6, "period": 4 },
        { "symbol": "Mn", "name": "Manganese", "atomic_number": 25, "group": 7, "period": 4 },
        { "symbol": "Fe", "name": "Iron", "atomic_number": 26, "group": 8, "period": 4 },
        { "symbol": "Co", "name": "Cobalt", "atomic_number": 27, "group": 9, "period": 4 },
        { "symbol": "Ni", "name": "Nickel", "atomic_number": 28, "group": 10, "period": 4 },
        { "symbol": "Cu", "name": "Copper", "atomic_number": 29, "group": 11, "period": 4 },
        { "symbol": "Zn", "name": "Zinc", "atomic_number": 30, "group": 12, "period": 4 },

        { "symbol": "Y", "name": "Yttrium", "atomic_number": 39, "group": 3, "period": 5 },
        { "symbol": "Zr", "name": "Zirconium", "atomic_number": 40, "group": 4, "period": 5 },
        { "symbol": "Nb", "name": "Niobium", "atomic_number": 41, "group": 5, "period": 5 },
        { "symbol": "Mo", "name": "Molybdenum", "atomic_number": 42, "group": 6, "period": 5 },
        { "symbol": "Tc", "name": "Technetium", "atomic_number": 43, "group": 7, "period": 5 },
        { "symbol": "Ru", "name": "Ruthenium", "atomic_number": 44, "group": 8, "period": 5 },
        { "symbol": "Rh", "name": "Rhodium", "atomic_number": 45, "group": 9, "period": 5 },
        { "symbol": "Pd", "name": "Palladium", "atomic_number": 46, "group": 10, "period": 5 },
        { "symbol": "Ag", "name": "Silver", "atomic_number": 47, "group": 11, "period": 5 },
        { "symbol": "Cd", "name": "Cadmium", "atomic_number": 48, "group": 12, "period": 5 },

        { "symbol": "Hf", "name": "Hafnium", "atomic_number": 72, "group": 4, "period": 6 },
        { "symbol": "Ta", "name": "Tantalum", "atomic_number": 73, "group": 5, "period": 6 },
        { "symbol": "W", "name": "Tungsten", "atomic_number": 74, "group": 6, "period": 6 },
        { "symbol": "Re", "name": "Rhenium", "atomic_number": 75, "group": 7, "period": 6 },
        { "symbol": "Os", "name": "Osmium", "atomic_number": 76, "group": 8, "period": 6 },
        { "symbol": "Ir", "name": "Iridium", "atomic_number": 77, "group": 9, "period": 6 },
        { "symbol": "Pt", "name": "Platinum", "atomic_number": 78, "group": 10, "period": 6 },
        { "symbol": "Au", "name": "Gold", "atomic_number": 79, "group": 11, "period": 6 },
        { "symbol": "Hg", "name": "Mercury", "atomic_number": 80, "group": 12, "period": 6 },

        { "symbol": "Rf", "name": "Rutherfordium", "atomic_number": 104, "group": 4, "period": 7 },
        { "symbol": "Db", "name": "Dubnium", "atomic_number": 105, "group": 5, "period": 7 },
        { "symbol": "Sg", "name": "Seaborgium", "atomic_number": 106, "group": 6, "period": 7 },
        { "symbol": "Bh", "name": "Bohrium", "atomic_number": 107, "group": 7, "period": 7 },
        { "symbol": "Hs", "name": "Hassium", "atomic_number": 108, "group": 8, "period": 7 },       
    ]
    },
    {
        "name": "Halogens",
		"class_name" : "halogens",
        "color": "palegreen",
        "hover_color": "mediumseagreen",
        "elements": [
            { "symbol": "F", "name": "Fluorine", "atomic_number": 9, "group": 17, "period": 2 },
            { "symbol": "Cl", "name": "Chlorine", "atomic_number": 17, "group": 17, "period": 3 },
            { "symbol": "Br", "name": "Bromine", "atomic_number": 35, "group": 17, "period": 4 },
            { "symbol": "I", "name": "Iodine", "atomic_number": 53, "group": 17, "period": 5 },
            { "symbol": "At", "name": "Astatine", "atomic_number": 85, "group": 17, "period": 6 },            
        ]
    },
    {
        "name": "Metalloids",
		"class_name" : "metalloids",
        "color": "beige",
        "hover_color": "teal",
        "elements": [
            { "symbol": "B", "name": "Boron", "atomic_number": 5, "group": 13, "period": 2 },
            { "symbol": "Si", "name": "Silicon", "atomic_number": 14, "group": 14, "period": 3 },
            { "symbol": "Ge", "name": "Germanium", "atomic_number": 32, "group": 14, "period": 4 },
            { "symbol": "As", "name": "Arsenic", "atomic_number": 33, "group": 15, "period": 4 },
            { "symbol": "Sb", "name": "Antimony", "atomic_number": 51, "group": 15, "period": 5 },
            { "symbol": "Te", "name": "Tellurium", "atomic_number": 52, "group": 16, "period": 5 },            
        ]
    },
	{
        "name": "Post-Transition Metals",
        "class_name": "post_transition_metals",
        "color": "lightyellow",
        "hover_color": "darkgray",
        "elements": [
            { "symbol": "Al", "name": "Aluminum", "atomic_number": 13, "group": 13, "period": 3 },
            { "symbol": "Ga", "name": "Gallium", "atomic_number": 31, "group": 13, "period": 4 },
            { "symbol": "In", "name": "Indium", "atomic_number": 49, "group": 13, "period": 5 },
            { "symbol": "Sn", "name": "Tin", "atomic_number": 50, "group": 14, "period": 5 },
            { "symbol": "Tl", "name": "Thallium", "atomic_number": 81, "group": 13, "period": 6 },
            { "symbol": "Pb", "name": "Lead", "atomic_number": 82, "group": 14, "period": 6 },
            { "symbol": "Bi", "name": "Bismuth", "atomic_number": 83, "group": 15, "period": 6 },
                    { "symbol": "Po", "name": "Polonium", "atomic_number": 84, "group": 16, "period": 6 }
        ]
},
{
    "name": "Lanthanides",
    "class_name": "lanthanides",
    "color": "plum",
    "hover_color": "mediumorchid",
    "elements": [
        { "symbol": "La", "name": "Lanthanum", "atomic_number": 57, "group": 3, "period": 6 },        
    ]
    },
    {
        "name": "Actinides",
        "class_name": "actinides",
        "color": "sandybrown",
        "hover_color": "peru",
        "elements": [
            { "symbol": "Ac", "name": "Actinium", "atomic_number": 89, "group": 3, "period": 7 },
        ]
    },
                        {
        "name": "Superheavy Elements",
        "class_name": "superheavy_elements",
        "color": "seashell",
        "hover_color": "dimgray",
        "elements": [
            { "symbol": "Mt", "name": "Meitnerium", "atomic_number": 109, "group": 9, "period": 7 },
            { "symbol": "Ds", "name": "Darmstadtium", "atomic_number": 110, "group": 10, "period": 7 },
            { "symbol": "Rg", "name": "Roentgenium", "atomic_number": 111, "group": 11, "period": 7 },
            { "symbol": "Cn", "name": "Copernicium", "atomic_number": 112, "group": 12, "period": 7 },
            { "symbol": "Nh", "name": "Nihonium", "atomic_number": 113, "group": 13, "period": 7 },
            { "symbol": "Fl", "name": "Flerovium", "atomic_number": 114, "group": 14, "period": 7 },
            { "symbol": "Mc", "name": "Moscovium", "atomic_number": 115, "group": 15, "period": 7 },
            { "symbol": "Lv", "name": "Livermorium", "atomic_number": 116, "group": 16, "period": 7 },
            { "symbol": "Og", "name": "Oganesson", "atomic_number": 118, "group": 18, "period": 7 },
            { "symbol": "Ts", "name": "Tennessine", "atomic_number": 117, "group": 17, "period": 7 }
        ]
    },
                        {
        "name": "Reactive Nonmetals",
        "class_name": "reactive_nonmetals",
        "color": "lightcyan",
        "hover_color": "deepskyblue",
        "elements": [
            { "symbol": "H", "name": "Hydrogen", "atomic_number": 1, "group": 1, "period": 1 },
            { "symbol": "C", "name": "Carbon", "atomic_number": 6, "group": 14, "period": 2 },
            { "symbol": "N", "name": "Nitrogen", "atomic_number": 7, "group": 15, "period": 2 },
            { "symbol": "O", "name": "Oxygen", "atomic_number": 8, "group": 16, "period": 2 },
            { "symbol": "P", "name": "Phosphorus", "atomic_number": 15, "group": 15, "period": 3 },
            { "symbol": "S", "name": "Sulfur", "atomic_number": 16, "group": 16, "period": 3 },
            { "symbol": "Se", "name": "Selenium", "atomic_number": 34, "group": 16, "period": 4 }
        ]
    }



];