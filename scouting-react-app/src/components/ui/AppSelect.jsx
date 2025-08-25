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
  ...rest
}) {
  const effectiveLabelId = label ? (labelId || `${id || 'appselect'}-label`) : undefined;
  const effectiveId = id || 'appselect';

  const defaultMenuProps = {
    disableScrollLock: true,
    PaperProps: { elevation: 8 },
    // Help avoid clipping when used in tables/sticky headers
    container: typeof document !== 'undefined' ? document.body : undefined,
  };

  const mergedMenuProps = { ...defaultMenuProps, ...(MenuProps || {}) };

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

  return (
    <FormControl size={size} disabled={disabled} fullWidth={fullWidth} className={className} sx={formSx ?? { minWidth: fullWidth ? undefined : 160 }}>
      {label && (
        <InputLabel id={effectiveLabelId} sx={{ color: '#fff' }}>
          {label}
        </InputLabel>
      )}
      <Select
        id={effectiveId}
        labelId={effectiveLabelId}
        value={value}
        onChange={onChange}
        label={label}
        displayEmpty={Boolean(placeholder)}
        MenuProps={mergedMenuProps}
        {...rest}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {children || items}
      </Select>
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
};
