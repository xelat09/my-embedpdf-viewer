import { useViewportCapability } from '@embedpdf/plugin-viewport/react';
import { useScroll } from '@embedpdf/plugin-scroll/react';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState, useCallback } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const PageControls = () => {
  const { provides: viewport } = useViewportCapability();
  const {
    provides: scroll,
    state: { currentPage, totalPages },
  } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [inputValue, setInputValue] = useState<string>(currentPage.toString());

  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);


  const handlePageChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pageStr = formData.get('page') as string;
    const page = parseInt(pageStr);

    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      scroll?.scrollToPage?.({
        pageNumber: page,
      });
    }
  };

  const handlePreviousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (currentPage > 1) {
      scroll?.scrollToPage?.({
        pageNumber: currentPage - 1,
      });
    }
  };

  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (currentPage < totalPages) {
      scroll?.scrollToPage?.({
        pageNumber: currentPage + 1,
      });
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        gap: 1.5, px: 1.5
      }}
    >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 1,
            pl: 1,
            pr: 0.3,
            py: 0.3,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
        <IconButton onClick={handlePreviousPage} disabled={currentPage === 1} size="small">
          <NavigateBeforeIcon sx={{color: 'white', fontWeight: 500,}}/>
        </IconButton>

        <form onSubmit={handlePageChange} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TextField
            name="page"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              setInputValue(value);
            }}
            slotProps={{
              input: {
                inputProps: {
                  style: {
                    width: '32px',
                    height: '25px',
                    padding: '4px',
                    textAlign: 'center',
                    fontWeight: 500,
                    color: 'white',
                  },
                },
              },
            }}
            variant="outlined"
            size="small"
          />
          <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
             / {totalPages}
          </Typography>
        </form>

        <IconButton onClick={handleNextPage} disabled={currentPage === totalPages} size="small">
          <NavigateNextIcon sx={{color: 'white', fontWeight: 500,}} />
        </IconButton>
      </Box>
    </Box>
  );
};
