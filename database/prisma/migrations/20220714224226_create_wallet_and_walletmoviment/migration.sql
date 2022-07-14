BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[wallet] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [value] DECIMAL(32,16),
    CONSTRAINT [wallet_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[wallet_moviment] (
    [id] NVARCHAR(1000) NOT NULL,
    [description] VARCHAR(1000) NOT NULL,
    [dateMoviment] DATETIME2,
    [value] DECIMAL(32,16),
    [type] NVARCHAR(1000) NOT NULL,
    [walletId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [wallet_moviment_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [wallet_moviment_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[wallet_moviment] ADD CONSTRAINT [wallet_moviment_walletId_fkey] FOREIGN KEY ([walletId]) REFERENCES [dbo].[wallet]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
