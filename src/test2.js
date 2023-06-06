import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'optionValue',
    headerName: 'Option Value',
    flex: 1,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'normal' }}>
        {params.value}
      </div>
    ),
  },
  // Add other columns here
];

const rows = [
  { id: 1, optionValue: 'This is a very long option value...' },
  // Add more rows of data
];

function adjustRowHeight() {
  const rows = document.querySelectorAll('.MuiDataGrid-row');
  rows.forEach((row) => {
    const cells = row.querySelectorAll('.MuiDataGrid-cell');
    let maxHeight = 0;
    cells.forEach((cell) => {
      const content = cell.querySelector('.MuiDataGrid-cellText');
      maxHeight = Math.max(maxHeight, content.scrollHeight);
    });
    row.style.height = `${maxHeight}px`;
  });
}

function App() {
  React.useEffect(() => {
    adjustRowHeight();
    window.addEventListener('resize', adjustRowHeight);
    return () => {
      window.removeEventListener('resize', adjustRowHeight);
    };
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
      />
    </div>
  );
}
