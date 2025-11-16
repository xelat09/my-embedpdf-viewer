import { usePan } from '@embedpdf/plugin-pan/react';
import { useRotateCapability } from '@embedpdf/plugin-rotate/react';
import { useExportCapability } from '@embedpdf/plugin-export/react';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import {
  Box,
  Divider,
  AppBar,
  Toolbar as MuiToolbar,
} from '@mui/material';
import { PageControls } from '../page-controls';

import { ZoomControls } from '../zoom-controls';
import { DrawerToggleButton } from '../drawer-system';
import { ToggleIconButton } from '../toggle-icon-button';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { PdfWithAnnotDownloadIcon, PdfDownloadIcon, SlowViewIcon, MailDocumentIcon, ThumbnailIcon } from '../../icons';

export const Toolbar = () => {
  const { provides: panProvider, isPanning } = usePan();
  const { provides: rotateProvider } = useRotateCapability();
  const { provides: exportProvider } = useExportCapability();
  const isMobile = useIsMobile();


  const handleTogglePanMode = () => {
    panProvider?.togglePan();
  };

  const handleRotateForward = () => {
    rotateProvider?.rotateForward();
  };

  const handleRotateBackward = () => {
    rotateProvider?.rotateBackward();
  };

  const handleDownload = () => {
    // TODO some download with no annotations
  }

  const handleDownloadWithAnnotations = () => {
    exportProvider?.download();
  }

  const handleMailDocument = () => {
    // TODO some mailto
  }

  const handleViewerSwitch = () => {
    // TODO some smart switcher
  }

  return (
    <>
      <AppBar position="static">
        <MuiToolbar disableGutters variant="dense" sx={{ gap: 0.5, px: 0.5, backgroundColor: "oklch(0.2 0.12 225)" }}>
          <ToggleIconButton isOpen={false} onClick={handleViewerSwitch}>
                <SlowViewIcon fontSize="small" />
          </ToggleIconButton>
          <ToggleIconButton isOpen={false} onClick={handleDownload}>
                <PdfDownloadIcon fontSize="small" />
          </ToggleIconButton>
          <ToggleIconButton isOpen={false} onClick={handleDownloadWithAnnotations}>
                <PdfWithAnnotDownloadIcon fontSize="small" />
          </ToggleIconButton>
          <ToggleIconButton isOpen={false} onClick={handleMailDocument}>
                <MailDocumentIcon fontSize="small" />
          </ToggleIconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: 'white', my: 1.2, opacity: 0.5 }}
          />
          <ToggleIconButton isOpen={false} onClick={handleRotateBackward}>
                <RotateLeftIcon fontSize="small" />
          </ToggleIconButton>
          <ToggleIconButton isOpen={false} onClick={handleRotateForward}>
                <RotateRightIcon fontSize="small" />
          </ToggleIconButton>
          <ZoomControls />
          {!isMobile && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'white', my: 1.2, opacity: 0.5 }}
              />
              <ToggleIconButton isOpen={isPanning} onClick={handleTogglePanMode}>
                <BackHandOutlinedIcon fontSize="small" />
              </ToggleIconButton>
            </>
          )}
          <PageControls />
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              minWidth: 0, // Allow shrinking below content size
              overflow: 'hidden', // Prevent overflow
            }}
          >
          </Box>
          <DrawerToggleButton componentId="search" />
          <DrawerToggleButton componentId="sidebar" />
        </MuiToolbar>
      </AppBar>
    </>
  );
};
