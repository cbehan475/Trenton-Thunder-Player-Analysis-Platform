// src/components/ui/AppSelect.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

/**
 * AppSelect: standardized dropdown component for consistent styling and behavior across the app.
 * - Wraps MUI Select by default; supports passing simple options or custom children.
 * - For accessibility, forwards id, labelId, and aria-* attributes.
 */
export default function AppSelect({
  value,
  onChange,
  options,
  label,
  disabled = false,
  fullWidth = false,
  className,
  id,
  labelId,
  MenuProps,
  size = 'small',
  placeholder,
  formSx,
  children,
  clearable = false,
  onClear,
  ...rest
}) {
  const effectiveLabelId = label ? (labelId || `${id || 'appselect'}-label`) : undefined;
  const effectiveId = id || 'appselect';

  const defaultMenuProps = {
    disableScrollLock: true,
    PaperProps: {
      elevation: 8,
      sx: {
        '& .MuiMenuItem-root.Mui-selected, & .MuiMenuItem-root:hover': {
          backgroundColor: '#F1C83B',
          color: '#000',
        },
      },
    },
    // Help avoid clipping when used in tables/sticky headers
    container: typeof document !== 'undefined' ? document.body : undefined,
  };

  // Merge PaperProps.sx safely
  const mergedMenuProps = {
    ...defaultMenuProps,
    ...(MenuProps || {}),
    PaperProps: {
      ...(defaultMenuProps.PaperProps || {}),
      ...((MenuProps && MenuProps.PaperProps) || {}),
      sx: {
        ...(((defaultMenuProps.PaperProps || {}).sx) || {}),
        ...((((MenuProps || {}).PaperProps || {}).sx) || {}),
      },
    },
  };

  const items = Array.isArray(options)
    ? options.map((opt) => {
        if (opt && typeof opt === 'object') {
          const { label: l, value: v, disabled: dis = false } = opt;
          return (
            <MenuItem key={String(v)} value={v} disabled={dis}>
              {l ?? String(v)}
            </MenuItem>
          );
        }
        return (
          <MenuItem key={String(opt)} value={opt}>
            {String(opt)}
          </MenuItem>
        );
      })
    : null;

  // Build Select props, allowing callers to override displayEmpty/renderValue via rest
  const selectBaseProps = {
    id: effectiveId,
    labelId: effectiveLabelId,
    value,
    onChange,
    label,
    MenuProps: mergedMenuProps,
    ...rest,
  };

  // If a placeholder prop is provided, we control displayEmpty/renderValue and include a disabled MenuItem.
  const usingInternalPlaceholder = placeholder !== undefined && placeholder !== null && placeholder !== '';

  return (
    <FormControl size={size} disabled={disabled} fullWidth={fullWidth} className={className} sx={{ position: 'relative', ...(formSx ?? { minWidth: fullWidth ? undefined : 160 }) }}>
      {label && (
        <InputLabel id={effectiveLabelId} sx={{ color: '#fff' }}>
          {label}
        </InputLabel>
      )}
      <Select
        {...selectBaseProps}
        {...(usingInternalPlaceholder
          ? {
              displayEmpty: true,
              renderValue: (selected) => (selected === '' ? placeholder : selected),
            }
          : {})}
      >
        {usingInternalPlaceholder ? (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        ) : null}
        {children || items}
      </Select>
      {clearable && !disabled && value !== '' && (
        <button
          type="button"
          aria-label="Clear selection"
          onClick={(e) => {
            e.stopPropagation();
            if (onClear) onClear();
          }}
          style={{
            position: 'absolute',
            right: 6,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            color: '#F1C83B',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 1,
            fontWeight: 900,
            fontSize: 14,
          }}
        >
          ×
        </button>
      )}
    </FormControl>
  );
}

AppSelect.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.shape({ label: PropTypes.node, value: PropTypes.any, disabled: PropTypes.bool }),
      ])
    ),
    PropTypes.node,
  ]),
  label: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  labelId: PropTypes.string,
  MenuProps: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium']),
  placeholder: PropTypes.node,
  formSx: PropTypes.any,
  children: PropTypes.node,
  clearable: PropTypes.bool,
  onClear: PropTypes.func,
};
