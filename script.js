function printCanvas() {
    const printWindow = window.open('', '_blank');
    const dataUrl = canvas.toDataURL('image/png');
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Label</title>
        </head>
        <body style="text-align: center; margin: 0;">
            <img src="${dataUrl}" style="max-width: 100%; height: auto;" />
            <script>
                window.onload = function() {
                    window.print();
                    window.close();
                };
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}