import { useState, useCallback } from 'react';
import { ProjectResponse } from '../api/api-client';

type UpdateResult<T> = {
  create: (data: T, errorMessage?: string) => Promise<void>;
  status: Status;
  error: Error | undefined;
};

type Status = 'success' | 'loading' | undefined;

export function useCreate<T>(
  createFunction: (data: T) => Promise<ProjectResponse>
): UpdateResult<T> {
  const [status, setStatus] = useState<Status>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  const create = useCallback(
    async (data: T, errorMessage?: string) => {
      if (errorMessage) {
        setError(new Error(errorMessage));
        return;
      }
      setStatus('loading');
      try {
        await createFunction(data);
        setStatus('success');
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error'));
        }
        setStatus(undefined);
      }
    },
    [createFunction]
  );

  return { create, status, error };
}
