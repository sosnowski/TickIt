CREATE TABLE [dbo].[ToDo] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [TaskId] INT           NOT NULL,
    [Title]  VARCHAR (200) NOT NULL,
    [Order]  SMALLINT      DEFAULT ((0)) NOT NULL,
    [Done]   BIT           DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ToDo_ToTask] FOREIGN KEY ([TaskId]) REFERENCES [dbo].[Tasks] ([Id]) ON DELETE CASCADE
);


GO
CREATE NONCLUSTERED INDEX [IX_ToDo_TaskId]
    ON [dbo].[ToDo]([TaskId] ASC);

