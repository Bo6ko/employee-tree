// src/declarations.d.ts
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module 'pdfmake/build/pdfmake' {
    export const pdfMake: any;
}

declare module 'pdfmake/build/vfs_fonts' {
    export const pdfFonts: any;
}

declare module 'pdfmake/build/pdfmake' {
    const pdfMake: {
        vfs: any;
        createPdf: (docDefinition: any) => any;
    };
    export default pdfMake;
}

declare module 'pdfmake/build/vfs_fonts' {
    const pdfFonts: any;
    export default pdfFonts;
}
