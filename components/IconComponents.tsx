import React from 'react';

export const HexagonIcon: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19 6.873a2 2 0 0 1 1 1.747v6.536a2 2 0 0 1 -1.03 1.748l-6 3.833a2 2 0 0 1 -1.94 0l-6 -3.833a2 2 0 0 1 -1.03 -1.748v-6.536a2 2 0 0 1 1.03 -1.748l6 -3.572a2 2 0 0 1 1.94 0l6 3.572z" />
  </svg>
);

export const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 24 24" 
        strokeWidth="3" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M5 12l5 5l10 -10" />
    </svg>
);


export const TrophyIcon: React.FC<{className?: string}> = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 21l8 0" />
    <path d="M12 17l0 4" />
    <path d="M7 4l10 0" />
    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
);

export const ChartIcon: React.FC<{className?: string}> = ({className}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M3 12l18 0" />
       <path d="M3 12l4 -4" />
       <path d="M11 12l4 4" />
       <path d="M19 12l-4 -4" />
       <path d="M3 12l4 4" />
       <path d="M11 12l4 -4" />
       <path d="M19 12l-4 4" />
    </svg>
);

export const FeedbackIcon: React.FC<{className?: string}> = ({className}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983c-.346 -.173 -.5 -.586 -.5 -1.017v-1.5c0 -3.866 3.134 -7 7 -7h3c3.866 0 7 3.134 7 7v1.5c0 .43 -.154 .844 -.5 1.017c-2.548 1.27 -5.46 1.983 -8.5 1.983z" />
       <path d="M9 10l.01 0" />
       <path d="M15 10l.01 0" />
       <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </svg>
);

export const GoldMedalIcon: React.FC<{className?: string}> = ({className}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 15l3.4 5.89l1.598 -3.232l3.598 .532l-3.4 -5.9l.598 -3.232l-3.598 .532l-1.598 -3.232l-1.598 3.232l-3.598 -.532l.598 3.232l-3.4 5.9l3.598 -.532l1.598 3.232l3.4 -5.89z" stroke="#002776" fill="#002776"/>
        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" stroke="#FFDC00" fill="#FFDC00"/>
    </svg>
);

export const SilverMedalIcon: React.FC<{className?: string}> = ({className}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 15l3.4 5.89l1.598 -3.232l3.598 .532l-3.4 -5.9l.598 -3.232l-3.598 .532l-1.598 -3.232l-1.598 3.232l-3.598 -.532l.598 3.232l-3.4 5.9l3.598 -.532l1.598 3.232l3.4 -5.89z" stroke="#002776" fill="#002776" />
        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" stroke="#C0C0C0" fill="#C0C0C0" />
    </svg>
);

export const BronzeMedalIcon: React.FC<{className?: string}> = ({className}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 15l3.4 5.89l1.598 -3.232l3.598 .532l-3.4 -5.9l.598 -3.232l-3.598 .532l-1.598 -3.232l-1.598 3.232l-3.598 -.532l.598 3.232l-3.4 5.9l3.598 -.532l1.598 3.232l3.4 -5.89z" stroke="#002776" fill="#002776" />
        <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" stroke="#CD7F32" fill="#CD7F32" />
    </svg>
);

export const UpArrowIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 5l0 14" />
       <path d="M18 11l-6 -6" />
       <path d="M6 11l6 -6" />
    </svg>
);

export const DownArrowIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 5l0 14" />
       <path d="M18 13l-6 6" />
       <path d="M6 13l6 6" />
    </svg>
);

export const JerseyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
       <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string; isFilled: boolean }> = ({ className, isFilled }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={isFilled ? '#FFDC00' : '#90A4AE'}
        fill={isFilled ? '#FFDC00' : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
);

export const PencilIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
       <path d="M13.5 6.5l4 4" />
    </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M4 7l16 0" />
       <path d="M10 11l0 6" />
       <path d="M14 11l0 6" />
       <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
       <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
);

export const ShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
    </svg>
);