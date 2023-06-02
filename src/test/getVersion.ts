/**
 * @param version Major.Minor.Patch
 * @example 0.0.1
 */
export default function getVersion(version: string, type?: 'alpha' | 'beta') {
  const [major, minor, patch] = version.split('.');

  let style = {};

  if (type === 'alpha') {
    style = {
      postfix: 'alpha',
      style: {
        background: 'rgba(228, 0, 41, 0.05)',
        color: '#e40029',
      },
    };
  }

  if (type === 'beta') {
    style = {
      postfix: 'beta',
      style: {
        background: 'rgba(244, 117, 0, 0.05)',
        color: '#f47500',
      },
    };
  }

  return {
    major,
    minor,
    patch,
    ...style,
  };
}
